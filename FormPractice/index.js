const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Form", "index.html"));
});

let users = [{ id: 1, username: "Ali", password: "123" }];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "Form")));
//Get By Id
app.get("/register/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  res.json(user);
});

//  GET USERS
app.get("/api/users", (req, res) => {
  res.json(users);
});
//  REGISTER
app.post("/register", (req, res) => {
  let { username, password } = req.body;
  const lastUser = users[users.length - 1];
  const newId = lastUser ? lastUser.id + 1 : 1;
  users.push({ id: newId, username, password });
  res.sendFile(path.join(__dirname, "Form", "users.html"));
});
//Delete USER
app.delete("/register/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.json(users);
});
//Update User
app.patch("/register/:id", (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  let user = users.find((user) => user.id == id);
  user.username = username;
  user.password = password;
  res.sendFile(path.join(__dirname, "Form", "users.html"));
});
//LISTEN
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
