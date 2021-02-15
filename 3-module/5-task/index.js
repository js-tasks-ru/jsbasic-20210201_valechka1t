function getMinMax(str) {
  let arr = str.split(/[, ]/);
  arr.sort( (a, b) => a - b );
  let result = {min: 0, max: 0}
  result.min = +(arr[0]);
  result.max = +(arr[arr.length-1]);
  return result;
}
