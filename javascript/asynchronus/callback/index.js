function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Ram" });
  }, 2000);
}

getUser(1, function (user) {
  console.log("Username:", user.name);
});
