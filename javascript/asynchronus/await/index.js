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
  }, 1000);
}

async function showData() {
  try {
    let user = await getUser(1);
    let posts = await getPosts(user.id);
    let comments = await getComments(posts[0]);

    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

showData();
