// @ts-ignore
import lista from "../dados/contas.json" assert { type: "json" };

let erros = [];

function criaContaValidador(lista) {
    const validacoes = lista.map(objeto => {
        const dados = {
            temErro: false,
            erros: [],
            nome: validarNome(objeto.nome),
            email: validarEmail(objeto.email),
            senha: validarSenha(objeto.senha)
        };
        return dados;
    });

    console.log(validacoes);
    return validacoes;
}

function validarSenha(senha) {
    if (typeof senha === 'string' && senha.length >= 8) {
        return senha;
    } else{
        return ({ temErro: true, campo: "Senha", 
        mensagem: "Senha menor que oito dígitos." });
    }
}

function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(email) == true) {
        return email;
    }else{
        return ({ temErro: true, campo: "Email", 
        mensagem: "Email inválido"});
    }
    
}

function validarNome(nome) {
    if (typeof nome === 'string' && nome.trim() !== "") {
        return nome;
    }else{
        return ({temErro: true, campo: "Nome", 
        mensagem: "Nome não pode ser vazio"});
    }
    }
    

criaContaValidador(lista)



