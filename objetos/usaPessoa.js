const Pessoa = require('./Pessoa.js'); //importei a classe

const joao = new Pessoa("João da Silva", 80, 1.80);
console.log(joao.imc());
console.log(joao.peso);

const maria = new Pessoa();
maria.peso = 90;
maria.altura = 1.60;
console.log(maria.imc()); 