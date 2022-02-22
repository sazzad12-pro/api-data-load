function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

function displayPost(posts) {
  const allPost = document.getElementById("posts");
  for (let post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `<h3>${post.title}</h3> 
     <p>${post.body}</p>`;
    allPost.appendChild(div);
  }
}
