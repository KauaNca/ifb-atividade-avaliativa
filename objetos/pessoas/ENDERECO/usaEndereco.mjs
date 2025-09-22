// arquivo usaEndereco, definido na pasta /pessoas/ENDERECO, denominada usaEndereco.mjs
import Endereco from './Endereco.mjs';

async function usaEndereco() {
  const end = new Endereco();

  try {
    // ao utilizar o await a função aguarda a execução completa do método setCep()  
    await end.setCep("72015565");
    console.log("✅ Endereço carregado com sucesso:");
    console.log("CEP:", end.getCep());
    console.log("Logradouro:", end.getLogradouro());
    console.log("Bairro:", end.getBairro());
    console.log("Cidade:", end.getCidade());
    console.log("UF:", end.getUf());
    console.log("Região:", end.getRegiao());
    

  } catch (erro) {
    console.error("❌ Erro ao definir CEP:", erro.message);
  }
}
usaEndereco();