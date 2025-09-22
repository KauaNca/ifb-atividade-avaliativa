// Arquivo criado em projeto no www.stackblitz.com denominado funcbasic.js


// Objetivo de uma função  = definir um bloco de código reutilizável
// function <nome> (<parametros>){ ... }
function soma(x,y) // recebe dados como parâmetro
 {
  let soma = x + y; // busquem declarar apenas variaves LET nas functions
  return soma;  // retorna a informação 
 }
  // chamar a função
 var print1 = soma(soma(4,7),3); console.log(print1);
 var print2 = soma(10,soma(print1,5)); console.log(print2);
 console.log(soma(print1,print2));

// Abaixo são apresentadas formas distintas de declarações de função, além de exemplos que se utilizam de operadores de subtração, divisão e multiplicação respectivamente
 const subtrair = function(x,y) { return x-y; }
 console.log(subtrair(3,5));
// arrow function
 const dividir = (x,y) => { return x/y; }
 console.log(dividir(3,5));

 const multiplicar = (x,y) => { return x*y; }
 console.log(multiplicar(3,5));


 