const express = require("express"); /*cria aplicação*/
const cors = require("cors"); /*autoriza que aplicação seja acessada*/
const bodyParser = require("body-parser"); /*manipular textos*/
/*ferramentas/bibliotecas*/

const app = express(); /*boa prática*/
const Port = 5001;

//TESTE
app.get("/teste", (req, res) => {
    res.send("Seja Bem vindo")
})

app.get("/perfil", (req, res) => {
    res.send("Confira seu Perfil")
})

app.get("/produto", (req, res) => {
    res.send("Esses são os produtos")
})

app.get("/login", (req, res) => {
    res.send("Realize seu login")
})


//ROTA PRODUTO - CREATE



app.listen(Port,()=>{
console.log(`Servidor Rodando na Porta, ${Port}`)
})
