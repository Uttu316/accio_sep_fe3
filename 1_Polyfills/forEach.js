Array.prototype.forEach = null;
/*
    takes a callback function
    access the current array
    loop the current array
    for every iteration it executes the callback
    in the callback it pass current item, index, current array as arguments

    after the loop it does not return anything
*/

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    let curr = this;

    for (let i = 0; i < curr.length; i++) {
      callback(curr[i], i, curr);
    }
  };
}

let arr = ["A", "B", "C", "D"];

let newArray = arr.forEach((ele, index, array) => {
  console.log(ele, index, array);
});
