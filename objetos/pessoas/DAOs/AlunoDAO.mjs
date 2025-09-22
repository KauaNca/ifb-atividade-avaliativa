import { localStorage } from "./localStorage.mjs";
import Aluno from '../Aluno.js';

export default class AlunoDAO {
    #aluno;

    constructor(aluno) {
        if (aluno instanceof Aluno) {
            this.#aluno = aluno;
            return true;
        }
        console.log('A variável em questão não é da classe Aluno');
        return false;
    }
    toJSON() {
        let fones = [];

        for (let fone of this.#aluno.getTelefones()) {
            fones.push({
                ddd: fone.getDdd(),
                numero: fone.getNumero(),
            });
        }
        return {
            nome: this.#aluno.getNome(),
            email: this.#aluno.getEmail(),
            cpf: this.#aluno.getCPF(),
            endereco: {
                logradouro: this.#aluno.getEndereco().getLogradouro(),
                cep: this.#aluno.getEndereco().getCep()
            },
            telefone: fones,
            matricula: this.#aluno.getMatricula(),
            curso: this.#aluno.getCurso()
        }
    }

    saveJSON(){
        localStorage.setItem('aluno',JSON.stringify(this.toJSON()));
    }
    recoveryJSON(){
        return JSON.parse(localStorage.getItem('aluno'));
    }
}