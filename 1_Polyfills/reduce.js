function myReduce(callback, initial) {
  if (this == null)
    throw new TypeError("my reduced called at null or undefined");

  if (typeof callback !== "function") {
    throw new TypeError("my reduced called without a callback");
  }

  let acc = initial;
  let start = 0;
  let length = this.length;

  let hasInital = arguments.length >= 2;

  if (!hasInital) {
    while (start < length && !(start in this)) {
      start++;
    }

    if (start >= length) {
      throw new TypeError("array is empty");
    }

    acc = this[start];
    start++;
  }

  for (let i = start; i < length; i++) {
    if (i in this) {
      acc = callback(acc, this[i], i, this);
    }
  }
  return acc;
}
