// usaIE.mjs (ou .js com "type":"module" no package.json)
//import IEfunc, { IEclss, IEjson } from './IE.mjs';
import  { IEfunc, IEclss, IEjson } from './IE.mjs';
import PJ from '../PJ.js';

// -------- Entrada comum --------
const agora = new Date();
const pj = new PJ();
pj.setCNPJ('12.345.678/0001-99');

// ===== 1) Classe =====
const ieC = new IEclss();
ieC.setNumero('111');
ieC.setEstado('SP');
ieC.setDataRegistro(agora);
ieC.setPJ(pj);

// Saída (classe)
console.log(`(Classe) Número: ${ieC.getNumero()}`);
console.log(`(Classe) Estado: ${ieC.getEstado()}`);
console.log(`(Classe) Data: ${ieC.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

// ===== 2) Factory (functions/closure) =====
const ieF = IEfunc();
ieF.setNumero('222');
ieF.setEstado('RJ');
ieF.setDataRegistro(agora);
ieF.setPJ(pj);

// Saída (factory)
console.log(`(Factory) Número: ${ieF.getNumero()}`);
console.log(`(Factory) Estado: ${ieF.getEstado()}`);
console.log(`(Factory) Data: ${ieF.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

// ===== 3) Objeto JSON =====
IEjson.setNumero('333');
IEjson.setEstado('MG');
IEjson.setDataRegistro(agora);
IEjson.setPJ(pj);

// Saída (JSON)
console.log(`(JSON) Número: ${IEjson.getNumero()}`);
console.log(`(JSON) Estado: ${IEjson.getEstado()}`);
console.log(`(JSON) Data: ${IEjson.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

// Linha-resumo com template literals
console.log(
  `Resumo → Classe: ${ieC.getNumero()}-${ieC.getEstado()} |` + `Factory: ${ieF.getNumero()}-${ieF.getEstado()} |` +
   `JSON: ${IEjson.getNumero()}-${IEjson.getEstado()}`
);