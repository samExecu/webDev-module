function getUser(id, callback) {
  console.log("User fetched");
  callback({ id: id, name: "Ram" });
}

function getPosts(userId, callback) {
  console.log("Posts fetched");
  callback(["post1", "post2"]);
}

function getComments(postId, callback) {
  console.log("Comments fetched");
  callback(["nice", "good"]);
}

getUser(1, function (user) {
  // getUser(user = { id: 1, name: "Ram" })
  getPosts(user.id, function (posts) {
    //getPosts(user.id = 1, posts = ["post1", "post2"])
    getComments(posts[0], function (comments) {
      //getComments(posts[0] = "post1", comments = ["nice", "good"])
      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    });
  });
});
