var express = require('express');
var router = express.Router();

/* GET home page. */


var lista 

router.get('/', function(req, res) {
  res.render("index", args);
})

var args = {
  Titulo: "Lista de Tarefas: ",
  Menu: [{url: "/Tarefas/Estudar", tarefa: "Estudar"},
  {url: "/Tarefas/Lavar o Carro", tarefa: "Lavar o Carro"}, {url: "/Tarefas/Treinar", tarefa: "Treinar"},
  {url: "/Tarefas/Jogar",tarefa: "Jogar"}]
}
router.get("/Tarefas/:tarefa", (req,res) => {
  //res.render("Tarefas", args);
  res.render("Tarefas", {Titulo: "Lista de Tarefas: "});
})



module.exports = router;
