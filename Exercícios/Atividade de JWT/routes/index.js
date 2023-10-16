var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken")

/* GET home page. */
router.get('/', function(req, res, next) {
  const token = jwt
  args = null
  res.render("index", args)
});


module.exports = router;
