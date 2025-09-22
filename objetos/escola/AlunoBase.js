class AlunoBase{
    #matricula;  // visibilidade é privada
    setMatricula(matricula){
         this.#matricula = matricula;
    }
    getMatricula()
      {
        return this.#matricula;
      }
}
module.exports = AlunoBase;