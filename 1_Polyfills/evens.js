function evens() {
  let array = this;

  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      output.push(array[i]);
    }
  }
  return output;
}

Array.prototype.evens = evens;

const arr = [2, 3, 4, 5, 5, 6, 43, 2, 232, 3, 4342, 2, 4, 3, 74, 54, 2, 2, 5];

const arr2 = [54, 4, 232, 232, 32, , 476, 7, 878, 7, 87, 878, 787, 6];

const e1 = arr.evens();
const e2 = arr2.evens();

console.log(e1, e2);
