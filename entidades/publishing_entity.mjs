import { v4 as uuidv4 } from 'uuid';

export class EntidadePublicacao {
    autor;
    id;
    mensagem;
    dataPublicacao;

    constructor(autor, mensagem){
        this.autor = autor;
        this.id = uuidv4();
        this.mensagem = mensagem
        this.dataPublicacao = new Date();
    }

}

