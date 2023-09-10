var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Ola Mundo' });
  res.end("<h1>Menu</h1>")
});

router.get('/test', function(req, res, next) {
  res.end("<h1>Apenas um teste</h1>")
});

// EXERCICIO 01

router.get('/a', function(req, res) {
  res.end("<a href='/b'>Link para pagina B</a><br><img src='https://fotos.amomeupet.org/uploads/fotos/0x800_1568662224_5d7fe2d09bccd_hd.jpeg'alt='dog-caramelo'/>");
});

router.get('/b', function(req, res, next) {
  res.end("<a href='/a'>Link para pagina A</a><br><img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PDycBrF3srLlWQGofRGyvgHaFj%26pid%3DApi&f=1&ipt=1e3d0b5d4670511c8b4e4c08ac1cf76f6159f077bd704c3a619b34cc4989ee65&ipo=images'alt='dog-caramelo'/>");
});

// EXERCICIO 03

router.get('/ex03/:palavra', function(req, res) {
  let vetor = req.params.palavra.split("");
  let inverso = "";
  for(let c=(vetor.length-1); c>=0;c--) {
    inverso += vetor[c];
  }
  res.end(`<h1>${inverso}</h1>`);
});




module.exports = router;
