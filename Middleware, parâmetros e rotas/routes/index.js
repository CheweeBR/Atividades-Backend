//Aluno: Tiago Eloy Possidonio Pereira / RA: 2417677

const express = require('express');
const router = express.Router();
const app = express();
var bodyParser = require('body-parser');
var urlencodeds = bodyParser.urlencoded({extended: false });
app.use(bodyParser.json());


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

// EXERCICIO 02
let ciclo = 0;
router.get('/ex02', function(req, res) {
  if(ciclo % 2 == 0) {
    ciclo++;
    res.end("<a href='/a'>Link para pagina A</a><br><img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PDycBrF3srLlWQGofRGyvgHaFj%26pid%3DApi&f=1&ipt=1e3d0b5d4670511c8b4e4c08ac1cf76f6159f077bd704c3a619b34cc4989ee65&ipo=images'alt='dog-caramelo'/>");
  } else {
    ciclo++;
    res.end("<a href='/b'>Link para pagina B</a><br><img src='https://fotos.amomeupet.org/uploads/fotos/0x800_1568662224_5d7fe2d09bccd_hd.jpeg'alt='dog-caramelo'/>");
  }
  
});

// EXERCICIO 03

router.get('/ex03', function(req, res) {
  let palavra = req.query.palavra;
  let vetor = palavra.split("");
  let inverso = "";
  for(let c=(vetor.length-1); c>=0;c--) {
    inverso += vetor[c];
  }
  res.end(`<h1>${inverso}</h1>`);
});

// EXERCICIO 04

router.get('/ex04/:palavra', function(req, res) {
  let vetor = req.params.palavra.split("");
  let inverso = "";
  for(let c=(vetor.length-1); c>=0;c--) {
    inverso += vetor[c];
  }
  res.end(`<h1>${inverso}</h1>`);
});

// EXERCICIO 05

router.get('/ex05/:operacao', function(req, res) {
  let x = parseFloat(req.query.x), y = parseFloat(req.query.y), op = req.params.operacao.toLowerCase(),result;
  if(op == "soma") {
    result = x+y;
    res.end(`<h1>${x} + ${y} = ${result}</h1>`);
  } else{
    if(op == "subtração" || op == "subtracao") {
      result = x-y;
      res.end(`<h1>${x} - ${y} = ${result}</h1>`);
    } else {
      if(op == "divisão" || op == "divisao") {
        result = x/y;
        res.end(`<h1>${x} / ${y} = ${result}</h1>`);
      } else {
        if(op == "multiplicação" || op == "multiplicacao" ) {
          result = x*y;
          res.end(`<h1>${x} x ${y} = ${result}</h1>`);
        } else{
          res.end(`<h1>Opcao invalida!</h1>`);
        }
      }
    }
  } 
});

// EXERCICIO 07

router.get('/ex07', (req,res) =>{
  res.sendFile('C:/Users/Tiago Eloy/Documents/GitHub/Atividades-Backend/Middleware, parâmetros e rotas/ex07.html');
})

const autenticador = function(req,res,next) {
  let senhaIdeal = req.body.user + req.body.user;
  if(req.body.pass != senhaIdeal){
    res.end("<h1>Acesso negado!</h1>");
  }else {
    next();
  }
}
router.post('/ex07/login',urlencodeds, autenticador,(req, res) => {
  res.send(`<h1>Usuario: ${req.body.user},Senha: ${req.body.pass}, acesso permitido!`)
})

// EXERCICIO 08

const verificador = function(req, res, next) {
  if(req.params.id % 2 == 0 &&  req.params.id >=0) {
    next();
  } else {
    res.end("<h1> Codigo invalido</h1>")
  }
}

router.get('/ex08/:id', verificador, (req,res) =>{
  res.end(`<h1> Curso de codigo: ${req.params.id} </h1>`);
})

// EXERCICIO 09

let contadorRequisicoes = 0;

const contagem = function (req,res,next) {
  contadorRequisicoes++;
  console.log(`Numeros de requisicoes: ${contadorRequisicoes}`);
  next();
};

router.get('/ex09', contagem,(req, res) => {
  res.send("<h1> Me chamou?</h1>");
});

// EXERCICIO 10

router.get('/ex10/:n', (req,res) =>{
  let vetor = req.params.n.split("+");
  let media;
  vetor = parseInt(vetor);
  for(let c=0; c<vetor.length;c++){
    media += vetor[c];
  }
  res.end(`<h1> media dos valores = ${media}</h1>`);
})



module.exports = router;
