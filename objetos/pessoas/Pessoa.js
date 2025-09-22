// 01: Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
//     Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
//     Objetivo do exemplo: demonstrar conceitos de relacionamentos simples entre as classes
// 02:
const Telefone = require('./Telefone');
const Endereco = require('./Endereco');
// 03:
class Pessoa {
  // 04:
  #nome;
  #email;
  // 05:
  // Classes relacionadas com Pessoa
  #endereco; // relacionamento simples de 1 para N
  #telefones = []; // relacionamento simples de N para N
  // 06:
  setEndereco(endereco) {
    if (endereco instanceof Endereco) {
      this.#endereco = endereco;
      endereco.setPessoa(this); // referência cruzada
      return true;
    } else {
      return false;
    }
  }
  // 07:
  getEndereco() {
    return this.#endereco;
  }
  // 08:
  addTelefone(telefone) {
    if (telefone instanceof Telefone) {
      this.#telefones.push(telefone);
      telefone.setPessoa(this); // referência cruzada
      return true;
    } else {
      return false;
    }
  }
  // 09:
  getTelefones() {
    return this.#telefones;
  }
  //=========================================
  // 10:
  setNome(nome) {
    if (nome) {
      this.#nome = nome;
      return true;
    } else {
      return false;
    }
  }
  // 11:
  getNome() {
    return this.#nome;
  }
  // 12:
  setEmail(email) {
    if (email) {
      this.#email = email;
      return true;
    } else {
      return false;
    }
  }
  // 13:
  getEmail() {
    return this.#email;
  }
}
// 14:
module.exports = Pessoa;
