import { ContaRepository } from "./dados/contas-repository.mjs";


export class RemoveContaRequest {
    constructor(contaRepository) {
        this.contaRepository = contaRepository;
    }

    remove(id) {
        return this.contaRepository.removeConta(id);
    }

}

