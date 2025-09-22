// cógido Telefone.js
class Telefone{
   #ddd;
   #numero;

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
   //============================================
   setDdd(ddd){
     if(ddd){
       this.#ddd = ddd;
       return true;
     }else{
      return false;
     }
   }
   getDdd(){
     return this.#ddd;
   }
   setNumero(numero){
    if(numero){
      this.#numero = numero;
      return true;
    }else{
     return false;
    }
  }
  getNumero(){
    return this.#numero;
  }
}
module.exports = Telefone;