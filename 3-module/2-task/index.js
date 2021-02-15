function filterRange(arr, a, b) {
  let filterResult = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] >= a) && (arr[i] <= b)) {
      filterResult.push(arr[i]);
    }
  }
  return filterResult;
}
