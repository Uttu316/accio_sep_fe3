function odds() {
  let arr = this;

  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      output.push(arr[i]);
    }
  }

  return output;
}

Array.prototype.odds = odds;

let arr1 = [1, 2, 3, 4, 5];

const arr = [2, 3, 4, 5, 5, 6, 43, 2, 232, 3, 4342, 2, 4, 3, 74, 54, 2, 2, 5];

const arr2 = [54, 4, 232, 232, 32, 476, 7, 878, 7, 87, 878, 787, 6];

const e1 = arr.odds();
const e2 = arr2.odds();

console.log(e1, e2);
