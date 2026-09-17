console.log("Start");
const getUserData = (userid) => {
  return new Promise((resolve, reject) => {
    console.log("A");
    if (userid.includes("a")) {
      resolve("User");
    } else {
      reject("OOps");
    }
    console.log("B");
  });
  console.log("C");
};
getUserData("Abc")
  .then((value) => {
    console.log(value);
  })
  .finally(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.log(err, "Error");
  });
console.log("D");
