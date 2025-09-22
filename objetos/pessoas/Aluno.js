// Arquivo criado em projeto no www.stackblitz.com denominado Aluno.js
// arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo : demonstrar conceitos de Herança, bem como encapsulamento adicionados de condicionais utilizando operadores lógicos

const PF = require('./PF');

class Aluno extends PF{
   
    #matricula;
    #curso;
    setMatricula(matricula){
      if(matricula){
        if((matricula.length === 8) && (matricula.startsWith("20"))){
            this.#matricula = matricula;
            return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }
    getMatricula(){
      return this.#matricula;
    }
    setCurso(curso){
      if(curso){
        if((curso === 'ADS') || (curso === 'SI')){
          this.#curso = curso;
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }
    getCurso(){
      return this.#curso;
    }
}
module.exports = Aluno;

/*
   - Operador aritmético
   - Operadores de Comparação (>, <, ==, !=)
       ---> Contruir expressões de teste;
   - Operadores Lógicos
       ---> Construir expressões compostas
    ! (negação) --> !('5' == 5) -> false
  && (And ou E) 
      --> ('5' == 5) && ('5' === 5) ->  false
  || (OR ou OU)
      --> ('5' == 5) || ('5' === 5) --> true	

*/