// Arquivo criado em projeto no www.stackblitz.com denominado PJ.js (Pessoa Juridica)
// arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo : demonstrar conceitos de Herança e sobreescrita de mátodos, bem como encapsulamento adicionados de condicionais e operadores de comparaçao

const Pessoa = require('./Pessoa');
const IE = require('./IE/IEclss');

class PJ extends Pessoa{
   
    #cnpj;
    setCNPJ(cnpj){
      /*
      Operador de Compara
      < : menor que ??
      > :  maior que ??
      <= : menor ou igual que ??
      >= : maior ou igual que ??
      */
      if(cnpj){
        if(cnpj.length < 18) {
         return false;
        }
        this.#cnpj = cnpj;
        return true;
      }else{
        return false;
      }
    }
    getCNPJ(){
      return this.#cnpj;
    }
   // sobre escrita do método setEmail
   setEmail(email) {
    /* operador de comparacão
        == : igualdade frouxa
        === : igauldade estrita
        != : diferença frouxa
        !== : diferenca estrita
    */
    if(email !== ''){
      if(email.includes('@')) {
        super.setEmail(email);
        return true;
      }
    }else{
      return false;
    }
  }

  #ie; 
  setIE(ie){
    if(ie instanceof IE){
      this.#ie = ie;
      ie.setPJ(this); // referencia cruzada
      return true;
    }else{
      return false;
    }
 }
 getIE(){
   return this.#ie;
 }

}
module.exports = PJ;

/*
Operadores de Comparação
<	Menor que	Verifica se o valor da esquerda é menor que o da direita
>	Maior que	Verifica se o valor da esquerda é maior que o da direita
<=	Menor ou igual	Verifica se o valor da esquerda é menor ou igual ao da direita
>=	Maior ou igual	Verifica se o valor da esquerda é maior ou igual ao da direita
==	Igualdade frouxa (loose equality)	Compara valores após conversão de tipo, se necessário
===	Igualdade estrita (strict equality)	Compara valores e tipos (sem conversão de tipo)
!=	Diferença frouxa (loose inequality)	Compara se os valores são diferentes, com coerção de tipo
*/
