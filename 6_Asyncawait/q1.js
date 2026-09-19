console.log("A");

function getAbc() {
  console.log("B");
  return "Hey";
}

const getXyz = async (value) => {
  console.log("C");
  return value + " Bye";
};
const v = getAbc();
const x = getXyz(v);

console.log(x);
console.log("D");
x.then((v) => {
  console.log(v);
}).catch((err) => {
  console.log(err);
});
console.log("E");
