import { v4 as uuidv4 } from 'uuid';
import { EntidadeConta } from "../entidades/conta.entity.mjs";

let listaContas = []

export function criaUsuario(nome, email, senha) {
    const usuario = new EntidadeConta(nome, email,senha)
    /*const data = new Date();
    const id = uuid();

    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        dataCriacao: data,
        id: id
    };*/

    listaContas.push(usuario);

    return listaContas;
}
