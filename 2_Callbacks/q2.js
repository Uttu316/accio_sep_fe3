console.log("A");

function getData(username, onSuccess, onFailure) {
  console.log("B");

  if (username.indexOf("a")) {
    console.log("C");
    onSuccess("Hey");
  } else {
    console.log("D");
    onFailure("Bye");
  }
  console.log("E");
}

console.log("F");
getData(
  "abc",
  (v) => {
    console.log(v);
  },
  (err) => {
    console.log("Error", err);
  },
);
console.log("G");
