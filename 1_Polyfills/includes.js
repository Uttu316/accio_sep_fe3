Array.prototype.includes = null; // assumption that includes does not exits

if (!Array.prototype.includes) {
  Array.prototype.includes = function (input, from) {
    let array = this;

    let start = from || 0;

    for (let i = start; i < array.length; i++) {
      if (input === array[i]) {
        return true;
      }
    }
    return false;
  };
}

let array = ["A", "B", "C", "D"];

let ans = array.includes("b");

console.log(ans);
