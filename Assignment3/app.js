const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));

const allUsers = [];

app.get("/", (req, res, next) => {
  res.render("index", {
    pageTitle: "Home",
    users: allUsers,
    hasUser: allUsers.length > 0,
  });
});
app.get("/add-users", (req, res, next) => {
  res.render("users", { pageTitle: "Users" });
});
app.post("/add-users", (req, res, next) => {
  console.log(req.body);
  allUsers.push({ name: req.body.name, age: req.body.age }), res.redirect("/");
});

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});
app.listen(3000, () => {
  console.log("server is started at port: 3000");
});
