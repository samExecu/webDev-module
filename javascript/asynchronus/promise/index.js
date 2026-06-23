function getUser(id) {
  return new Promise((resolve) => {
    console.log("User fetched");
    resolve({ id: id, name: "Ram" });
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    console.log("Posts fetched");
    resolve(["post1", "post2"]);
  });
}

function getComments(postId) {
  return new Promise((resolve) => {
    console.log("Comments fetched");
    resolve(["nice", "good"]);
  });
}

let savedUser, savedPosts;

getUser(1)
  .then((user) => {
    savedUser = user;
    return getPosts(user.id);
  })
  .then((posts) => {
    savedPosts = posts;
    return getComments(posts[0]);
  })
  .then((comments) => {
    console.log("User:", savedUser);
    console.log("Posts:", savedPosts);
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.log("Something went wrong:", error);
  });
