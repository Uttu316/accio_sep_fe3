console.log("A");

const p = new Promise((resolve, reject) => {
  resolve(2);
  reject(4);
});

p.then((v) => {
  console.log(v);
  return v + 2;
})
  .then((v) => {
    console.log(v);
    return v + 3;
  })
  .then((v) => {
    console.log(v);
  })
  .then((v) => {
    console.log(v);
    return v + 2;
  })
  .then((v) => {
    console.log(v);
    throw "Oops";
  })
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });
console.log("End");
