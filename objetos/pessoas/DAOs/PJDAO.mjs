// localStorage Simulado. localStorage e sessionStorage não funcionam no Node.js puro, somente através do Browser
import {localStorage} from './localStorage.mjs';
import PJ from '../PJ.js';
export default class PJDAO{

  #pj;

  constructor(pj){
    if(pj instanceof PJ){
      this.#pj = pj;
    }
  }

  toJSON(){
    let fones = [];
    for(let fone of this.#pj.getTelefones())
      {
          fones.push({
               ddd : fone.getDdd(),
               numero : fone.getNumero(),
          });
      }
    return {
      nome : this.#pj.getNome(),
      email : this.#pj.getEmail(),
      cnpj : this.#pj.getCNPJ(),
      endereco : {
         logradouro : this.#pj.getEndereco().getLogradouro(),
         cep : this.#pj.getEndereco().getCep(), 
      },
      telefone : fones,
      ie : {
        numero : this.#pj.getIE().getNumero(),
        estado : this.#pj.getIE().getEstado(),
        dataRegsitro : this.#pj.getIE().getDataRegistro(),
      }
    }
  }

  saveJSON(){
   // transforma em string JSON usando stringify() e armazena
   localStorage.setItem("pj", JSON.stringify(this.toJSON()));
  }
  recoveryJSON(){
   // recupera a string armazenada e transforma em JSON usando parse()
   return JSON.parse(localStorage.getItem("pj"));
  }

}
///module.exports = PJDAO;