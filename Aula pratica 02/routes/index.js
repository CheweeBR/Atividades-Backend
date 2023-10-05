var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var args = {
    nome: req.session.nome
  };
  res.render("index", args); 
});

router.post('/salvauser', function(req, res) {
    const userActive = req.body.username;
    req.session.nome = userActive;
    res.redirect("/");
});

router.get('/random/:n', function(req, res){
  res.end(`<h1> Numero: ${req.cookies.numero}</h1>`);
})


router.get('/random', (req, res) => {
    var number = Math.random() * 1000 * 10000;
    res.cookie("numero", number);
    res.redirect('/random/' + number);
  })


module.exports = router;
