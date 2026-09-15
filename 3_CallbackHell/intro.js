function getUserData(username, onSuccess, onFailure) {
  setTimeout(() => {
    if (username === "abc") {
      onSuccess({
        name: "ABC_XYZ",
        id: "2342323424ew",
        city: "Agra",
      });
    } else {
      onFailure("OOps no user found");
    }
  }, 3000);
}

function getPost(userid, onSuccess, onFailure) {
  setTimeout(() => {
    if (userid) {
      onSuccess({
        postid: "2342782743982",
        caption: "Travelling to Paris",
      });
    } else {
      onFailure("Oops no post found");
    }
  }, 3000);
}

function getComment(postid, onSuccess, onFailure) {
  setTimeout(() => {
    if (postid) {
      onSuccess({
        commentId: "434343234343c",
        comment: "Bonjour",
      });
    } else {
      onFailure("Oops no comment found");
    }
  }, 3000);
}

console.log("Start");

getUserData(
  "abc",
  (data) => {
    console.log("User", data);
    getPost(
      data.id,
      (post) => {
        console.log(post);
        getComment(
          post.postid,
          (comment) => {
            console.log(comment);
          },
          (err) => {
            console.log(err);
          },
        );
      },
      (err) => {
        console.log(err);
      },
    );
  },
  (err) => {
    console.log(err);
  },
);
