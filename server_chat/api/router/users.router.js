var express = require("express");

var router = express.Router();

var users = require("../controller/users.controller");

router.get("/", users.index);
router.post("/register", users.register);

module.exports = router;
