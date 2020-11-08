function updateInventory(oldInventory, freshInventory) {
  const allInventoryEntries = [...oldInventory, ...freshInventory];
  const allInventoryItems = [...new Set(allInventoryEntries.map(
    ([, inventoryItem]) => inventoryItem,
  ))];
  allInventoryItems.sort();

  const newInventory = [];
  allInventoryItems.forEach((item) => {
    const allCountsForItem = allInventoryEntries.filter(
      ([, inventoryItem]) => inventoryItem === item,
    ).map(([count]) => count);
    newInventory.push([allCountsForItem.reduce(
      (itemTotalCount, itemCount) => itemTotalCount + itemCount,
    ), item]);
  });

  return newInventory;
}

export {
  updateInventory,
};
