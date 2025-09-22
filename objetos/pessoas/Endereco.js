//const Pessoa = require('./Pessoa');

class Endereco{
   #logradouro;
   #cep;

   #pessoas = []
   setPessoa(pessoa){
     if(pessoa){
          this.#pessoas.push(pessoa);
          return true;
     }else{
         return false;
     }
   }
   getPessoas(){
     return this.#pessoas;
   }

   //=====================================
   setLogradouro(logradouro){
      if(logradouro){
        this.#logradouro = logradouro;
        return true;
      }else{
        return false
      }
   }
   getLogradouro(){
     return this.#logradouro;
   }
   setCep(cep){
     if(cep){
       this.#cep = cep;
       return true;
     }else{
       return false;
     } 
   }
   getCep(){
     return this.#cep;
   }
}
module.exports = Endereco;