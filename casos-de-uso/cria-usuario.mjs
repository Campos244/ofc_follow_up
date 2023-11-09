
import { EntidadeConta } from "../entidades/conta.entity.mjs";
import { ContaRepository } from "../dados/contas.repository.mjs";

export class CriaUsuario{
    constructor(ContaRepository){
        this.ContaRepository = ContaRepository;
    }

    executa(nome, email, senha){
        const novoUsuario = new EntidadeConta(nome, email, senha);
        this.ContaRepository.salva(novoUsuario);
        return this.ContaRepository.lista();
    }

}
