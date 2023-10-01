var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render("index", null);
});

router.post('/salvauser', function(req, res) {
  const {user} = req.body;
  req.session.user = user;
  res.redirect("/")
});


module.exports = router;
