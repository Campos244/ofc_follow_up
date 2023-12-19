import { CriaUsuario } from "../casos-de-uso/cria-usuario.mjs";
/*import { error } from "console";
import { EntidadePublicacao } from "../entidades/conta.entity.mjs";*/
import fs from "fs";

/*export function salva() {

    let contas = criaUsuario();

    try {
        const contaJson = JSON.stringify(contas);

        fs.writeFileSync("dados/contas.json", contaJson);
        console.log("Arquivo salvo com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar o arquivo:", error);
    }
}*/

/*export function lista() {
    const encoding = 'utf-8'
    fs.promises.readFile("dados/contas.json", encoding)
        .then((texto) => console.log(texto))
        .catch(error)
}*/


export class ContaRepository {
    constructor() {
        this.listaContas = [];
    }

    salva(usuario) {
        this.listaContas.push(usuario);

        try {
            const contaJson = JSON.stringify(this.listaContas);

            fs.writeFileSync("dados/contas.json", contaJson);
            console.log("Arquivo salvo com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar o arquivo:", error);
        }
    }

    lista() {
        const encoding = 'utf-8';
        return fs.promises.readFile("dados/contas.json", encoding);
    }
}

export class Postagens {
    constructor() {
        this.listaPostagens = [];
    }

    posta(novaPostagem) {
        this.listaPostagens.push(novaPostagem)
        const publicaçaoPostada = JSON.stringify(this.listaPostagens)
        try {
            fs.writeFileSync('dados/publicacoes.json', publicaçaoPostada);
            console.log('Arquivo de publicações salvo com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar o arquivo de publicações:', error);
        }
    }
}
