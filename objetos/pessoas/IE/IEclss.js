// Inscrição Estadual  - IE
// clss - Estrutura de Classe
// classe construida dentro da pasta "/pessoas/IE

const PJ = require('../PJ');

class IE {
  #numero;
  #estado;
  #dataRegistro;

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
  
  setEstado(estado){
    if(estado){
      this.#estado = estado;
      return true;
    }else{
      return false;
    }
  } 
  getEstado(){
    return this.#estado;
  }

  setDataRegistro(dataregistro){
    if(dataregistro){
      this.#dataRegistro = dataregistro;
      return true;
    }else{
      return false;
    }
  } 
  getDataRegistro(){
    return this.#dataRegistro;
  }

  #pj;

  setPJ(pj){
    if(pj){
      this.#pj = pj;
      return true;
    }else{
      return false;
    }
  }
  getPJ(){
    return this.#pj;
  }

} module.exports = IE;





/*const ie = new IE();
ie.setNumero('123456');
ie.setEstado('SP');
ie.setDataRegistro(new Date());

console.log(ie.getNumero());
console.log(ie.getDataRegistro());*/