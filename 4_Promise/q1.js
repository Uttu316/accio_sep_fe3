console.log("A");

const p = new Promise((resolve, reject) => {
  console.log("B");
  setTimeout(() => {
    if ("A" < "C") {
      resolve("D");
    } else {
      reject("E");
    }
    console.log("F");
  }, 3000);
  console.log("G");
});
console.log("H");

p.then((value) => {
  console.log(value);
})
  .finally(() => {
    console.log("Done");
  })
  .catch((e) => {
    console.log("Error", e);
  });
console.log("I");
