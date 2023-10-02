var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  usuario = {
    nome: req.session.user
  }
  res.render("index", usuario);
});

router.post('/salvauser', function(req, res) {

    const userActive = req.body.username;
    req.session.user = userActive;
    res.redirect("/");
});


module.exports = router;
