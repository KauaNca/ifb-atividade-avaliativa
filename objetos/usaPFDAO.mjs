import PF from './pessoas/PF.js'; // 02 // Importa a classe Pessoa Jurídica
import PFDAO from './pessoas/DAOs/PFDAO.mjs'; // 03 // Importa a DAO que manipula objetos PJ

import Endereco from './pessoas/Endereco.js'; // 04 // Importa a classe Endereco
import Telefone from './pessoas/Telefone.js'; // 05 // Importa a classe Telefone
import Titulo from './pessoas/Titulo.js';

const pf = new PF();
pf.setNome('Kauã');
pf.setCPF('0279855');
pf.setEmail('kauanunes@gmail.com');

console.log(pf.getCPF());

const endereco = new Endereco();
endereco.setCep('72242051');
endereco.setLogradouro('QNP 23');

const telefone = new Telefone();
telefone.setDdd('61');
telefone.setNumero('993091100');

const titulo = new Titulo();
titulo.setNumero('12');
titulo.setZona('1');
titulo.setSecao('DF');

pf.setEndereco(endereco);
pf.addTelefone(telefone);
pf.setTitulo(titulo);

const pfdao = new PFDAO(pf);
const x = pfdao.toJSON();

pfdao.saveJSON();

console.log(x);
pfdao.recoveryJSON();
