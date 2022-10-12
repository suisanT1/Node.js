const express = require("express");
const path = require("path");
const { title } = require("process");
const router = express.Router();
const rootDir = require("../util/path");
const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "admin/add-product",
    activeAddProduct: true,
    productCSS: true,
    formCSS: true,
  });
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.router = router;
exports.products = products;
