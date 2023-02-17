function showCount(arr, item) {
  const basketItemArr = arr?.filter(q => q === item);
  return basketItemArr.length;
}

const removeBasket = (arr, obj) => {
  const itemIndex = arr.indexOf(obj);
  if (itemIndex === -1) {
    return arr;
  }
  arr.splice(itemIndex, 1);
  return arr;
};

export { showCount, removeBasket };
