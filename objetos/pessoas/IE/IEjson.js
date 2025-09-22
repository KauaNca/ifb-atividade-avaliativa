// Inscrição Estadual - IE
// json - Estrutura de Objeto Literal (JSON)

const PJ = require('../PJ');

// Objeto literal para IE
const IE = {
  numero: null,
  estado: null,
  dataRegistro: null,
  pj: null,

  setNumero: function (numero) {
    if (numero) {
      this.numero = numero;
      return true;
    }
    return false;
  },
  getNumero: function () {
    return this.numero;
  },

  setEstado: function (estado) {
    if (estado) {
      this.estado = estado;
      return true;
    }
    return false;
  },
  getEstado: function () {
    return this.estado;
  },

  setDataRegistro: function (data) {
    if (data instanceof Date) {
      this.dataRegistro = data;
      return true;
    }
    return false;
  },
  getDataRegistro: function () {
    return this.dataRegistro;
  },

  setPJ: function (pj) {
    if (pj instanceof PJ) {
      this.pj = pj;
      return true;
    }
    return false;
  },
  getPJ: function () {
    return this.pj;
  }
};

// ------ Exemplo de uso ------

// Criando uma PJ
const pj = new PJ();
pj.setCNPJ("12.345.678/0001-99");

// Manipulando o IE (JSON)
IE.setNumero("123456");
IE.setEstado("SP");
IE.setDataRegistro(new Date());
IE.setPJ(pj);

console.log("Número IE:", IE.getNumero());
console.log("Estado:", IE.getEstado());
console.log("Data Registro:", IE.getDataRegistro());
console.log("PJ vinculada:", IE.getPJ());

const iejson = JSON.stringify(IE);
console.log(iejson);