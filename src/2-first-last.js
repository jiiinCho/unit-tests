export const firstLast = (items) => {
  if (!items.length) {
    //item.length = 0 -> false -> !false = true
    return "No items!";
  }
  return items.length === 1
    ? `Only item: ${items[0]}`
    : `First: ${items[0]}, Last: ${items[items.length - 1]}`;
};
