var express = require('express');
var router = express.Router();

let contadorGlobalReq = 0;
let contadorUserReq = {} 
/* GET home page. */
router.get('/', function(req, res) {
  contadorGlobalReq++;
  let user = req.session.nome;
  if(user){
    if(contadorUserReq[user]){
      contadorUserReq[user]++;
    } else{
      contadorUserReq[user] = 1;
    }
  }
  var args = {
    nome: req.session.nome
  };
  console.log(`Req Global: ${contadorGlobalReq} // Req user ${user}: ${contadorUserReq[user]}`)
  res.render("index", args); 
});

router.post('/salvauser', function(req, res) {
    contadorGlobalReq++;
    if(contadorUserReq[req.session.nome]){
      contadorUserReq[req.session.nome]++;
    }
    const userActive = req.body.username;
    req.session.nome = userActive;
    res.redirect("/");
});

router.get('/random/:n', function(req, res){
  contadorGlobalReq++;
  if(contadorUserReq[req.session.nome]){
    contadorUserReq[req.session.nome]++;
  }
  res.end(`<h1> Numero: ${req.cookies.numero}</h1>`);
})


router.get('/random', (req, res) => {
    contadorGlobalReq++;
    if(contadorUserReq[req.session.nome]){
      contadorUserReq[req.session.nome]++;
    }
    var number = Math.random() * 1000 * 10000;
    res.cookie("numero", number);
    res.redirect('/random/' + number);
  })


module.exports = router;
