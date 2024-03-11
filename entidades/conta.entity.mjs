import { v4 as uuidv4 } from 'uuid';

export class EntidadeConta {
    nome;
    email;
    senha;
    data;
    id;

    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.data = new Date();
        this.id = uuidv4();
    }
}



