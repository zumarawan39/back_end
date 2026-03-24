const { uuid } = require("uuidv4");
const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let students = [
  { username: "Ali", rollNo: 101 },
  { username: "Sara", rollNo: 102 },
  { username: "Usman", rollNo: 103 },
  { username: "Hina", rollNo: 104 },
  { username: "Bilal", rollNo: 105 },
];

// middleware
app.use(express.urlencoded({ extended: true }));

// app.get("/",(req,res)=>{
//     res.send("Server is Working ");
// })
//Form

app.get("/post/new", (req, res) => {
  res.render("new.ejs");
});

///Create New Student Second api
app.post("/posts", (req, res) => {
  console.log("req", req.body);

  const { username, rollNo } = req.body;

  const newStudent = {
    id: uuid(),
    username,
    rollNo,
  };
  students.push(newStudent);
  res.redirect("/post");
});

//Get ALL POSTS First api
app.get("/post", (req, res) => {
  res.render("crud.ejs", { students });
});

//Get Single Post
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
