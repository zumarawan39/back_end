const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/register", (req, res) => {
  const { username, password } = req.query;
  res.send(`Register GET Back ${username}`);
});

app.post("/register", (req, res) => {
  console.log("Post Request Received", req.query);

  const { username, password } = req.query;

  res.send(`Register POST  ${username}`);
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
