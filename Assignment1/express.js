const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("This always run.");
  next();
});
app.use("/users", (req, res, next) => {
  console.log("This is middleware 1");
  res.send("<h1>Hello, this is Users Page!</h1>");
});
app.use("/", (req, res, next) => {
  console.log("This is middle ware 2");
  res.send("<h1>Hello, This is Home Page!");
});

app.listen(3030);
