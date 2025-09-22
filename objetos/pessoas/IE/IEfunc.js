// Inscrição Estadual  - IE
// func - Estrutura de Function

const PJ = require('../PJ');

// Factory para IE usando apenas funções e closure (sem class)
function IE() {
  let dados = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null
  };

  function setNumero(numero) {
    if (numero) { dados.numero = numero; return true; }
    return false;
  }
  function getNumero() { return dados.numero; }

  function setEstado(estado) {
    if (estado) { dados.estado = estado; return true; }
    return false;
  }
  function getEstado() { return dados.estado; }

  function setDataRegistro(data) {
    if (data instanceof Date) { dados.dataRegistro = data; return true; }
    return false;
  }
  function getDataRegistro() { return dados.dataRegistro; }

  function setPJ(pj) {
    if (pj) {
      dados.pj = pj; 
      return true;
    }
    return false;
  }
  function getPJ() { return dados.pj; }

  return {
    setNumero, getNumero,
    setEstado, getEstado,
    setDataRegistro, getDataRegistro,
    setPJ, getPJ
  };

}

// ------ Exemplo de uso ------
const pj = new PJ();
pj.setCNPJ('123455678');

const ie = IE();

ie.setNumero("123456");
ie.setEstado("SP");
ie.setDataRegistro(new Date());
ie.setPJ(pj);


console.log("Número IE:", ie.getNumero());
console.log("Estado:", ie.getEstado());
console.log("Data Registro:", ie.getDataRegistro());
console.log("CNPJ:", ie.getPJ());