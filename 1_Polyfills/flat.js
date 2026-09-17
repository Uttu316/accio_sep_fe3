function flat(depth = 1) {
  if (this == null) return null;

  if (depth <= 0) return [...this];

  let array = [...this];

  function flatter(arr, currentDepth) {
    if (currentDepth >= depth) return [...arr];

    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (i in arr) {
        if (Array.isArray(arr[i])) {
          result.push(...flatter(arr[i], currentDepth + 1));
        } else {
          result.push(arr[i]);
        }
      }
    }
    return result;
  }
  return flatter(array, 0);
}

Array.prototype.myFlat = flat;
const nestedArray = [1, [2, [3, [4]], 5]];
console.log(nestedArray.myFlat(Infinity));
