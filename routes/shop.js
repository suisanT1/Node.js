const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const product = adminData.products;
  res.render("shop", {
    prods: product,
    pageTitle: "Shop",
    path: "/",
    hasProduct: product.length > 0,
    activeShop: true,
    productCSS: true,
  });
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // console.log("This is shop JS", adminData.products);
});

module.exports = router;
