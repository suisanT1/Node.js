const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.engine(
  "hbs",
  expressHbs({
    layoutDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3030);
