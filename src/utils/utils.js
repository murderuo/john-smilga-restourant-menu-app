function showCount(arr, item) {
  const basketItemArr = arr?.filter(q => q === item);
  return basketItemArr.length;
}

export { showCount };
