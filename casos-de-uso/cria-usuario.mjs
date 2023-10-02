import { v4 as uuid } from "uuid";

let listaContas = []

export function criaUsuario(nome, email, senha) {

   

    const data = new Date();
    const id = uuid();

    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        dataCriacao: data,
        id: id
    };

    /*const usuarioJSON = JSON.stringify(usuario);*/
   /* fs.writeFileSync(nomeArquivo, usuarioJSON);*/

    /*return usuario;*/
    /*console.log(usuario)*/
    listaContas.push(usuario);

    return listaContas;


}
