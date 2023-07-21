import { useCallback, useState } from "react";

export const useChoiceState = <TItem = number>(
  items: TItem[],
  getId: (item: TItem) => number
) => {
  const [selectedItems, setSelectedItems] = useState<TItem[]>([]);

  const areAllItemsSelected = selectedItems.length === items.length;

  const selectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setSelectedItems(items);
      } else {
        setSelectedItems([]);
      }
    },
    [items]
  );

  const selectById = useCallback(
    (item: TItem, checked: boolean) => {
      const id = getId(item);

      if (checked) {
        setSelectedItems((prev) => [...prev, item]);
      } else {
        setSelectedItems((prev) => prev.filter((_item) => getId(_item) !== id));
      }
    },
    [getId]
  );

  const clearSelectedItems = useCallback(() => {
    setSelectedItems([]);
  }, []);

  const getIsItemSelected = useCallback(
    (item: TItem) => {
      const isSelected = !!selectedItems.find(
        (_item) => getId(_item) === getId(item)
      );

      return isSelected;
    },
    [selectedItems, getId]
  );

  return {
    selectedItems,
    areAllItemsSelected,
    selectAll,
    selectById,
    clearSelectedItems,
    getIsItemSelected,
  };
};
