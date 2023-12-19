import { EntidadeConta } from "../entidades/conta.entity.mjs";
import { ContaRepository } from "../dados/contas-repository.mjs";
/*import { EntidadePublicacao } from "../entidades/conta.entity.mjs";

import { Postagens } from "../dados/contas-repository.mjs";*/


export class CriaUsuario {
    constructor(ContaRepository) {
        this.ContaRepository = ContaRepository;
    }

    executa(nome, email, senha) {
        const novoUsuario = new EntidadeConta(nome, email, senha);
        this.ContaRepository.salva(novoUsuario);
        return this.ContaRepository.lista();
    }

}


export class CriaPostagem {
    constructor(postagens) {
        this.postagens = postagens;
    }

    executaPostagem(autor, mensagem) {
        const novaPostagem = { autor, mensagem };
        this.postagens.posta(novaPostagem);
        return novaPostagem;
    }
}

