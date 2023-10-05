const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const engine = mustacheExpress();

app.engine("mustache", engine);

app.get("/", (req, res) => {
    let arg = {
        titulo: "Ola pessoal",
        descricao: "Esse é meu primeiro Template utilizando mustache express, afim de criar páginas dinâmicas"
    }
    res.render("home", arg);
})

app.listen(3000, () => {
    console.log("Executando...")
})

app.set("views", "templates");
app.set("view engine", "mustache");