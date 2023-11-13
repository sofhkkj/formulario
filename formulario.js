
const express = require('express');
const app = express();
app.get("/", function(res, res){
    res.sendFile(__dirname + "/src/index.html");
});
app.get("/sobre", function(res, res){
    res.sendFile(__dirname + "/src/sobre.html");
});


app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});
const express = require('express');
const app = express();


app.get("/", function(res, res){
    res.send("Página Inicial");
});
app.get("/sobre", function(res, res){
    res.send("Página Sobre");
});
app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});


const express = require('express');
const app = express();
app.get("/", async (req, res) => {
    res.send("Página inicial");
});
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});