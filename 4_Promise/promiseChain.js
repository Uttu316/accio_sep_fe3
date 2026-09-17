const p = new Promise((resolve) => {
  resolve("Hey");
});

const newP = p.then((value) => {
  return value + " A"; // resolved value for new promise
});

const newp2 = newP.then((value) => {
  console.log(value);
  return value + " B";
});

const newp3 = newp2.then((value) => {
  console.log(value);
  throw "Oops"; // rejected reason error for new promise
});

newp3
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log(err);
  });
