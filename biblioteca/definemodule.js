
// Arquivo criado em projeto no www.stackblitz.com denominado define módulo.js
// arquivo criado dentro de uma pasta  na raiz do projeto

function soma(x,y) // recebe dados como parâmetro
 {
  let soma = x + y; // busquem declarar apenas variaves LET nas functions
  return soma;  // retorna a informação 
 }

 const subtrair = function(x,y) { return x-y; }

 // módulos são utilizados para disponibilizar bibliotecas e funções e classes
 module.exports = {soma,subtrair}