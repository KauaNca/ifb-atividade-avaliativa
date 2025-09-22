// Arquivo criado em projeto no www.stackblitz.com denominado usaPessoas.js
// arquivo criado dentro de uma pasta /objetos na raiz do projeto
// Objetivo do exemplo : demonstrar a utulização dos conceitos de encapsulamento (com adição de condicionais) e Herança (classes Pessoa e PF disponíveis na pasta /objetos/pessoas)
console.log("==== Objeto Pessoa =====");

const Pessoa = require('./pessoas/Pessoa');

const x = new Pessoa();
// resposta = x.setNome('Leandro');
resposta = x.setNome('');
console.log(resposta);
if(resposta){
  console.log(x.getNome());
}else{
  console.log("Nome vazio");
}
resposta = x.setEmail('vaguetti@gmail.com');
console.log(resposta);
if(resposta){
  console.log(x.getEmail());
}else{
  console.log("E-mail vazio");
}
// ===================================
console.log("==== Objeto PF =====");

const PF = require('./pessoas/PF');
const y = new PF();

resposta = y.setNome('Pedro');
console.log(resposta);
if(resposta){
  console.log(y.getNome());
}else{
  console.log("Nome vazio");
}

resposta = y.setEmail('');
console.log(resposta);
if(resposta){
  console.log(y.getEmail());
}else{
  console.log("Email vazio");
}

resposta = y.setCPF('123456789-10');
console.log(resposta);
if(resposta){
  console.log(y.getCPF());
}else{
  console.log("CPF vazio");
}

// ===================================
console.log("==== Objeto PJ =====");

const PJ = require('./pessoas/PJ');
const z = new PJ();

resposta = z.setNome('Pedro');
console.log(resposta);
if(resposta){
  console.log(z.getNome());
}else{
  console.log("Nome vazio");
}

resposta = z.setEmail('leandro@gmail.com');
console.log(resposta);
if(resposta){
  console.log(z.getEmail());
}else{
  console.log("Email vazio ou Inválido");
}

resposta = z.setCNPJ('00.623.904/0001-73');
//resposta = z.setCNPJ('00.623.904/');
console.log(resposta);
if(resposta){
  console.log(z.getCNPJ());
}else{
  console.log("CNPJ Inválido");
}
// ====================================
console.log("==== Objeto Aluno =====");

const Aluno = require('./pessoas/Aluno');

const w = new Aluno();

resposta = w.setNome('Pedro');
console.log(resposta);
if(resposta){
  console.log(w.getNome());
}else{
  console.log("Nome vazio");
}

resposta = w.setMatricula('20123456')
console.log(resposta);
if(resposta){
  console.log(w.getMatricula());
}else{
  console.log("Matricula Inválida");
}

resposta = w.setCurso('SIS')
console.log(resposta);
if(resposta){
  console.log(w.getCurso());
}else{
  console.log("Curso Inválido");
}