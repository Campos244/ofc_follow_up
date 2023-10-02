// @ts-ignore
import lista from "../dados/contas.json" assert { type: "json" };


let temErro = false;

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

        if (dados.temErro) {
            temErro = true;
            erros.push(...dados.erros);
        }

        return dados;
    });

    console.log(validacoes);
    return validacoes;
}

function validarSenha(senha) {
    if (typeof senha === 'string' && senha.length >= 8) {
        return senha;
    } else{
        temErro = true;
        erros.push({ campo: "Senha", mensagem: "Senha menor que oito dígitos." });
        return false;
    }
}

function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(email) == true) {
        return email;
    }else{
        temErro = true;
        erros.push({campo: "Email", mensagem: "Email inválido"})
        return false;
    }
    
}

function validarNome(nome) {
    if (typeof nome === 'string' && nome.trim() !== "") {
        return nome;
    }else{
        temErro = true;
        erros.push({campo: "Nome", mensagem: "Nome não pode ser vazio"})
        return false;
    }
    }
    

criaContaValidador(lista);


