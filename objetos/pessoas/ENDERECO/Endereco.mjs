// classe Endereco, definido na pasta /pessoas/ENDERECO, denominada Endereco.mjs
// objetivo demonstrar o uso de métodos/funções assíncronas bem como disparo de "Exceptions"

export default class Endereco {
    #cep;
    #logradouro;
    #bairro;
    #cidade;
    #uf;
    #regiao;
  
  
    // Método assíncrono que busca e define os dados do endereço
    async setCep(cep) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
  
      const resposta = await fetch(url);
      //console.log(resposta);
  
      if (!resposta.ok) {
        throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
      }
  
      const dados = await resposta.json();
  
      if (dados.erro) {
        throw new Error("CEP não encontrado na base do ViaCEP.");
      }
  
      // Populando os atributos  caso nenhum erro seja encontrado
      this.#cep = dados.cep;
      this.#logradouro = dados.logradouro;
      this.#bairro = dados.bairro;
      this.#cidade = dados.localidade;
      this.#uf = dados.uf;
      this.#regiao = dados.regiao;
    }
  
    // Getters públicos
    getCep() {
      return this.#cep;
    }
  
    getLogradouro() {
      return this.#logradouro;
    }
  
    getBairro() {
      return this.#bairro;
    }
  
    getCidade() {
      return this.#cidade;
    }
  
    getUf() {
      return this.#uf;
    }
    getRegiao() {
      return this.#regiao;
    }
  }