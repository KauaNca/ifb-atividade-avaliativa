import Aluno from './pessoas/Aluno.js'; // 02 // Importa a classe Pessoa Jurídica
import Endereco from './pessoas/Endereco.js'; // 04 // Importa a classe Endereco
import Telefone from './pessoas/Telefone.js'; // 05 // Importa a classe Telefone
import Titulo from './pessoas/Titulo.js';
import AlunoDAO from './pessoas/DAOs/AlunoDAO.mjs'

const aluno = new Aluno();
aluno.setNome('Kauã');
aluno.setCPF('0279855');
aluno.setEmail('kauanunes@gmail.com');

console.log(aluno.getCPF());

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

aluno.setEndereco(endereco);
aluno.addTelefone(telefone);
aluno.setTitulo(titulo);
aluno.setCurso('ADS');
aluno.setMatricula('20123458');

const alunodao = new AlunoDAO(aluno);
const x = alunodao.toJSON();

alunodao.saveJSON();

console.log(x);
alunodao.recoveryJSON();
