function api(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === "Abc") {
        resolve("Hey");
      } else {
        reject("Bye");
      }
      console.log("A");
    }, 3000);
  });
}

async function getUser() {
  console.log("B");
  try {
    const x = await api("Abc");
    console.log(x);
    return x + " Ok";
  } catch (e) {
    console.log(e);
  }
  console.log("C");
}
console.log("Start");
getUser().then((v) => {
  console.log(v);
});
console.log("End");
