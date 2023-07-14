let prompt = require("prompt-sync")()

let nome = prompt("Digite o nome do ujsuario")

let senha = prompt("Digite a senha")

if(nome == "admim" && senha == "senha 123"){
    console.log ("usuario admin permitido !!!")
    


}
else{
    console.log("you shall not pass !!")
    console.log("voce nao passara")
}
