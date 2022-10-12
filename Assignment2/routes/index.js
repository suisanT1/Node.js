const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "html", "index.html"));
});
router.get("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "html", "users.html"));
});

module.exports = router;
