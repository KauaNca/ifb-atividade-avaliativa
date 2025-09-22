// Arquivo criado em projeto no www.stackblitz.com denominado Aluno.js
// arquivo criado dentro de uma pasta /objetos/escola na raiz do projeto
// Objetivo do exemplo : demonstrar conceitos de visibilidade de atributos e métodos e objetivos do encapsulamento

class Aluno {

    #matricula; // atributo privato
    #curso;
    escola; // atributo publico
    

    setMatricula(matricula){
       this.#matricula = matricula;
    }
    getMatricula(){
      return this.#matricula;
    }
    setCurso(curso){
      this.#curso = curso;
   }
   getCurso(){
     return this.#curso;
   }
}
module.exports = Aluno;