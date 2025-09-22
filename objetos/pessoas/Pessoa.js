// Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
// arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo : demonstrar conceitos de encapsulamento adicionados de condicionais

const Telefone = require('./Telefone');
const Endereco = require('./Endereco');

class Pessoa {
  #nome;
  #email;
// Classes Relacionadas com Pessoa
  #endereco;  // relacionamento simples de 1-N
  #telefones = [];  // relacionamento simples de N-N

  setEndereco(endereco){
    if(endereco instanceof Endereco)
     {
       this.#endereco = endereco;
       endereco.setPessoa(this); // referencia cruzada
       return true;
     }else{
       return false;
     }

  }
  getEndereco(){
    return this.#endereco;
  }

  addTelefone(telefone){
    if (telefone instanceof Telefone){
      this.#telefones.push(telefone);
      telefone.setPessoa(this); // referencia cruzada
      return true;
    }else{
      return false;
    }

  }
  getTelefones(){
    return this.#telefones;
  }
  //=========================================
  setNome(nome) {
    if(nome) {
        this.#nome = nome;
        return true;
    }else{
        return false;
    }
  }
  getNome() {
    return this.#nome;
  }
  setEmail(email) {
    if(email){
      this.#email = email;
      return true;
    }else{
      return false;
    }
  }
  getEmail() {
    return this.#email;
  }
}
module.exports = Pessoa;








