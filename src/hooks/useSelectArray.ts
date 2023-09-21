import { useEffect, useRef, useState } from "react";

type SelectArrayItem = string | { value: string; label: string };

export const mapToSelectArray = <T>(
  mapFn: (item: T) => SelectArrayItem,
  ...items: any[]
) => {
  const selectArray: SelectArrayItem[] = [];

  for (const item of items) {
    if (Array.isArray(item)) {
      selectArray.push(...item.map(mapFn));
    } else if (typeof item === "string") {
      selectArray.push(item);
    }
  }

  return selectArray;
};

export const useSelectArray = <T>(
  mapFn: (item: T) => SelectArrayItem,
  ...items: any[]
) => {
  const mapFnRef = useRef(mapFn);

  const [list, setList] = useState<SelectArrayItem[]>(
    mapToSelectArray(mapFnRef.current, ...items)
  );

  useEffect(() => {
    setList(mapToSelectArray(mapFnRef.current, ...items));
  }, [items]);

  return list;
};
