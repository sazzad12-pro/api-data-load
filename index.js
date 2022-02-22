function loadInput() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(users) {
  const allUser = document.getElementById("user");
  for (let user of users) {
    const li = document.createElement("li");
    li.innerText = `name:${user.name},email:${user.email}`;
    allUser.appendChild(li);
  }
}
