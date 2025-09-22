const Telefone = require('./pessoas/Telefone');
const Endereco = require('./pessoas/Endereco');
const Titulo = require('./pessoas/Titulo');

const PF = require('./pessoas/PF');


const end = new Endereco();
const fone1 = new Telefone();
const fone2 = new Telefone();

end.setLogradouro('QNM 40');
fone1.setNumero('1234-5678');
fone2.setNumero('1255-5578');

const titulo = new Titulo();
titulo.setNumero('1234156');
titulo.setSecao('DF');

const obj = new PF();
obj.setNome('José');
obj.setEndereco(end); // vincula Endereco a PF
obj.addTelefone(fone1); // vincula Telefone a PF
obj.addTelefone(fone2);  // vincula outro Telefone a PF
obj.setTitulo(titulo); // vincula Titulo a PF


console.log(obj.getNome());
console.log(obj.getEndereco().getLogradouro());
console.log(obj.getTelefones());
//=========================================
for (let x of obj.getTelefones()) {
  console.log("Numeto:", x.getNumero());
}

//=========================================
console.log(obj.getTitulo().getNumero());
// ===== Endereco ======
console.log(end.getPessoas());
for (let x of end.getPessoas()) {
  console.log("Donos do Endereco:", x.getNome());
}
// ===== Telefone ======
console.log(fone1.getPessoas());
for (let x of fone1.getPessoas()) {
  console.log("Donos do Telefone:", x.getNome());
}
// ===== Titulo =======
console.log(titulo.getPF().getNome());




