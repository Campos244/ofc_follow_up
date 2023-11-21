// @ts-ignore
import lista from "../dados/contas.json" assert { type: "json" };
import { ContaRepository } from "../dados/contas-repository.mjs";
import { criaUsuarioCasoDeUso } from "../dados/conta-repository-tests.mjs";
import fs from "fs";
let erros = [];

/*function criaContaValidador(lista) {
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

criaContaValidador(ContaRepository)*/


// Carrega o conteúdo do arquivo lista.json







class CriaContaValidador {
    constructor(filePath) {
        this.filePath = filePath;
    }


    validarSenha(senha) {
        if (typeof senha === 'string' && senha.length >= 8) {
            return senha;
        } else {
            return ({
                temErro: true, campo: "Senha",
                mensagem: "Senha menor que oito dígitos."
            });
        }
    }

    validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regexEmail.test(email) == true) {
            return email;
        } else {
            return ({
                temErro: true, campo: "Email",
                mensagem: "Email inválido"
            });
        }

    }

    validarNome(nome) {
        if (typeof nome === 'string' && nome.trim() !== "") {
            return nome;
        } else {
            return ({
                temErro: true, campo: "Nome",
                mensagem: "Nome não pode ser vazio"
            });
        }
    }

    executa(){
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            const listaDeObjetos = JSON.parse(data);
        
            const validacoes = listaDeObjetos.map(objeto => {
                const dados = {
                    temErro: false,
                    erros: [],
                    nome: this.validarNome(objeto.nome),
                    email: this.validarEmail(objeto.email),
                    senha: this.validarSenha(objeto.senha)
                };
                return dados;
            });
        
            console.log(validacoes);
            return validacoes;
        } catch (error) {
            console.error('Erro ao ler ou validar os dados:', error);
            return [];
        }
    }
}
    


const filePath = 'dados/contas.json';
const validador = new CriaContaValidador(filePath);
validador.executa();







