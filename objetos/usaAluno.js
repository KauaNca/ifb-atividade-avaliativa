const Aluno = require('./escola/Aluno');
// Arquivo criado em projeto no www.stackblitz.com denominado usaAluno.js
// arquivo criado dentro de uma pasta /objetos na raiz do projeto
// Objetivo do exemplo : demonstrar a utulização dos conceitos de visibilidade de atributos e métodos e objetivos do encapsulamento

 const joao = new Aluno();
 
 // joao.#matricula = 1234; --> ERRO
 joao.escola = "IFB";
 joao.setMatricula(12345);
 joao.setCurso("Programação de FrontEnd");

 //console.log(joao.#matricula); --> ERRO
 console.log(joao.getMatricula());
 console.log(joao.getCurso());
 console.log(`Escola : ${joao.escola}`);