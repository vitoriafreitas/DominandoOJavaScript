//Para receber entrada do teclado no terminal. Não serve para navegador.
var readline = require('readline-sync');

var name = readline.question("Qual o seu nome?");

console.log("Olá " +name+"!");