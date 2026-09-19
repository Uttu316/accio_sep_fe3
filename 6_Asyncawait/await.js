function api() {
  console.log("Api");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Accio");
    }, 3000);
  });
}

async function getData() {
  console.log("A");

  const r = await api();
  console.log("B");
  return r;
}

getData()
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("End");
