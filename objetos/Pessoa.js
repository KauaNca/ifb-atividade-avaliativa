/*  -- comentário de bloco
Classe - Estrutura que eu representar
  --> atributos (caracteristicas, propriedades)
  --> métodos (ações, funcionalidades)
Objeto  --> Instancia da classe
*/
class Pessoa
{
  constructor(nome, peso, altura)
  {
        this.nome = nome;
        this.peso = peso;
        this.altura  = altura;
  }
  imc()
  {
     let imc = this.peso / (this.altura * this.altura);
     return imc;
  }
}
module.exports = Pessoa;