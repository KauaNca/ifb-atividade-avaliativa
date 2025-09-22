// IE.mjs (ESM)
// Requer Node com "type": "module" ou extensão .mjs
// Ajuste o caminho/forma de import do PJ conforme seu projeto:
import PJ from "../PJ.js"; // se seu PJ for CommonJS, use: import PJpkg from "../PJ.js"; const PJ = PJpkg.default ?? PJpkg;

export class IEclss {
  #numero;
  #estado;
  #dataRegistro;
  #pj;

  setNumero(numero) { if (numero) { this.#numero = numero; return true; } return false; }
  getNumero() { return this.#numero; }

  setEstado(estado) { if (estado) { this.#estado = estado; return true; } return false; }
  getEstado() { return this.#estado; }

  setDataRegistro(dataregistro) { if (dataregistro instanceof Date) { this.#dataRegistro = dataregistro; return true; } return false; }
  getDataRegistro() { return this.#dataRegistro; }

  setPJ(pj) { if (pj instanceof PJ) { this.#pj = pj; return true; } return false; }
  getPJ() { return this.#pj; }
}

// Factory function (continua sendo default export)
//export default function IEfunc() {
export function IEfunc() {  // default
  let dados = { numero: null, estado: null, dataRegistro: null, pj: null };

  function setNumero(numero) { if (numero) { dados.numero = numero; return true; } return false; }
  function getNumero() { return dados.numero; }

  function setEstado(estado) { if (estado) { dados.estado = estado; return true; } return false; }
  function getEstado() { return dados.estado; }

  function setDataRegistro(data) { if (data instanceof Date) { dados.dataRegistro = data; return true; } return false; }
  function getDataRegistro() { return dados.dataRegistro; }

  function setPJ(pj) { if (pj instanceof PJ || (pj && pj.cnpj)) { dados.pj = pj; return true; } return false; }
  function getPJ() { return dados.pj; }

  return { setNumero, getNumero, setEstado, getEstado, setDataRegistro, getDataRegistro, setPJ, getPJ };
}

// Objeto JSON (export nomeado)
export const IEjson = {
  numero: null,
  estado: null,
  dataRegistro: null,
  pj: null,

  setNumero(numero) { if (numero) { this.numero = numero; return true; } return false; },
  getNumero() { return this.numero; },

  setEstado(estado) { if (estado) { this.estado = estado; return true; } return false; },
  getEstado() { return this.estado; },

  setDataRegistro(data) { if (data instanceof Date) { this.dataRegistro = data; return true; } return false; },
  getDataRegistro() { return this.dataRegistro; },

  setPJ(pj) { if (pj instanceof PJ || (pj && pj.cnpj)) { this.pj = pj; return true; } return false; },
  getPJ() { return this.pj; }
};