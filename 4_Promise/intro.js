const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (2 < 4) {
      resolve("Small"); // notify object about fullfill result
    } else {
      reject("Big"); // notify object about rejected error
    }
  }, 3000);
});

p.then((value) => {
  console.log(value);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("End");
  });
