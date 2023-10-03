var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if (req.session.user) {
    var usuario = {};
    usuario = {
      nome: req.session.user
    }
    res.render("index", { usuario: usuario }); 
  } else{
    res.render("index", null); 
  }

});

router.post('/salvauser', function(req, res) {
    const userActive = req.body.username;
    req.session.user = userActive;
    res.redirect("/");
});


module.exports = router;
