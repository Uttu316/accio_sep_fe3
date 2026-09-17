const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("A");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("B");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("C");
  }, 500);
});

const p = Promise.any([p1, p2, p3]);

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log("Error", err);
});
