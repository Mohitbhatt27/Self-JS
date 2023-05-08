function fetchUser(userId, callback) {
  console.log('Fetching user...');
  setTimeout(function () {
    const user = { id: userId, name: 'John' };
    callback(user);
  }, 1000);
}

function fetchUserPosts(user, callback) {
  console.log('Fetching user posts...');
  setTimeout(function () {
    const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
    ];
    callback(posts);
  }, 1000);
}

function fetchPostComments(post, callback) {
  console.log('Fetching post comments...');
  setTimeout(function () {
    const comments = [
      { id: 1, text: 'Comment 1' },
      { id: 2, text: 'Comment 2' },
    ];
    callback(comments);
  }, 1000);
}

fetchUser(1, function (user) {
  fetchUserPosts(user, function (posts) {
    fetchPostComments(posts[0], function (comments) {
      console.log('Comments:', comments);
    });
  });
});

// In this example, we have three functions that fetch data from a server: fetchUser, fetchUserPosts, and fetchPostComments. Each function takes some time to complete and calls a callback function when done.

// The program starts by calling fetchUser with a user ID of 1. When fetchUser is completed, it calls the callback function, which is the fetchUserPosts function. When fetchUserPosts is completed, it calls the callback function, which is the fetchPostComments function. Finally, when fetchPostComments is completed, it logs the comments to the console.
