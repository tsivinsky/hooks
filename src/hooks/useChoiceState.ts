import { useCallback, useRef, useState } from "react";

export type UseChoiceStateOptions<TData = unknown, TItem = TData> = {
  select: (item: TData) => TItem;
  getId: (item: TItem) => number;
  shouldSelect: (item: TData) => boolean;
};

export const useChoiceState = <TData = unknown, TItem = TData>(
  items: TData[],
  { select, shouldSelect, getId }: UseChoiceStateOptions<TData, TItem>
) => {
  const selectRef = useRef(select);
  const getIdRef = useRef(getId);
  const shouldSelectRef = useRef(shouldSelect);

  const [selectedItems, setSelectedItems] = useState<TData[]>([]);

  const selectedItemIds = selectedItems.map(selectRef.current);
  const areAllItemsSelected =
    selectedItems.length === items.filter(shouldSelectRef.current).length;

  const selectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setSelectedItems(items.filter(shouldSelectRef.current));
      } else {
        setSelectedItems([]);
      }
    },
    [items]
  );

  const selectById = useCallback((item: TData, checked: boolean) => {
    const id = getIdRef.current(selectRef.current(item));

    if (!shouldSelectRef.current(item)) return;

    if (checked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) =>
        prev.filter(
          (_item) => getIdRef.current(selectRef.current(_item)) !== id
        )
      );
    }
  }, []);

  const clearSelectedItems = useCallback(() => {
    setSelectedItems([]);
  }, []);

  const getIsItemSelected = useCallback(
    (item: TItem) => {
      const isSelected =
        selectedItems.findIndex(
          (_item) =>
            getIdRef.current(selectRef.current(_item)) ===
            getIdRef.current(item)
        ) !== -1;

      return isSelected;
    },
    [selectedItems]
  );

  return {
    selectedItemIds,
    selectedItems,
    areAllItemsSelected,
    selectAll,
    selectById,
    clearSelectedItems,
    getIsItemSelected,
  };
};
