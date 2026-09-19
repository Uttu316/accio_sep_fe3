async function getData() {
  return "hello"; // resolved value of promise returned by async function
  throw "Bye"; // rejected reason of promise returned by async function
}

const v = getData();

v.then((o) => {
  console.log(o);
});
