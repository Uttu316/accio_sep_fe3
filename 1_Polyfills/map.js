Array.prototype.map = null;
if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    let curr = this;
    let output = [];
    for (let i = 0; i < curr.length; i++) {
      let value = callback(curr[i], i, curr);
      output.push(value);
    }
    return output;
  };
}

let arr = ["A", "B", "C", "D"];

let newArray = arr.map((ele, index, array) => {
  console.log(ele, index, array);
  return ele + index;
});
console.log(newArray);
