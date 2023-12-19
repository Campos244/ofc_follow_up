// @ts-ignore
import fs from "fs";


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

/*class CriaContaValidador {
    constructor(filePath) {
        this.filePath = filePath;
        this.listaDeObjetos = []; // Inicializa listaDeObjetos como um array vazio
    }

    validarSenha(senha) {
        if (typeof senha === 'string' && senha.length >= 8) {
            this.listaDeObjetos.push(senha);
            return senha;
        } else {
            return {
                temErro: true,
                campo: "Senha",
                mensagem: "Senha menor que oito dígitos."
            };
        }
    }

    validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regexEmail.test(email)) {
            this.listaDeObjetos.push(email);
            return email;
        } else {
            return {
                temErro: true,
                campo: "Email",
                mensagem: "Email inválido"
            };
        }
    }

    validarNome(nome) {
        if (typeof nome === 'string' && nome.trim() !== "") {
            this.listaDeObjetos.push(nome);
            return nome;
        } else {
            return {
                temErro: true,
                campo: "Nome",
                mensagem: "Nome não pode ser vazio"
            };
        }
    }

    async executa() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            this.listaDeObjetos = JSON.parse(data);
            const validacoes = this.listaDeObjetos.map(objeto => {
                const dados = {
                    nome: this.validarNome(objeto.nome),
                    email: this.validarEmail(objeto.email),
                    senha: this.validarSenha(objeto.senha)
                };
                return dados;
            });
    
            console.log("Validações:", validacoes);
            const contasValidas = this.descartaContasInvalidas(validacoes);
    
            return validacoes; // Retorna 'validacoes' opcionalmente se necessário
        } catch (error) {
            console.error('Erro ao ler ou validar os dados:', error);
            return [];
        }
    }
    

     descartaContasInvalidas(validacoes) {
        // Implemente a lógica para filtrar as contas inválidas aqui
        if (!Array.isArray(validacoes)) {
            console.error('Os dados de validação são inválidos ou estão ausentes.');
            return [];
        }

        const contasValidas = validacoes.filter(dados => dados.temErro == false);
        console.log("Contas válidas:", contasValidas);

        const filePathValidate = 'dados/contasValidadas.json';
        try {
             fs.promises.writeFile(filePathValidate, JSON.stringify(contasValidas, null, 2));
            console.log("Contas válidas salvas com sucesso no arquivo!");
        } catch (error) {
            console.error('Erro ao salvar as contas válidas:', error);
        }
    }
}

const filePathInvalidate = 'dados/contas.json';
const validador = new CriaContaValidador(filePathInvalidate);
validador.executa();


//const contasValidas = validador.descartaContasInvalidas(validacoes);
// validador.salvarContasNoArquivo(contasValidas);

*/



class CriaContaValidador {
    constructor(filePath) {
        this.filePath = filePath;
        this.listaDeObjetos = [];
    }

    validarSenha(senha) {
        if (typeof senha === 'string' && senha.length >= 8) {
            this.listaDeObjetos.push(senha);
            return senha;
        } else {
            const dados = {
                temErro: true,
                campo: "Senha",
                mensagem: "Senha menor que oito dígitos."
            };
            return dados
        }
    }

    validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regexEmail.test(email)) {
            this.listaDeObjetos.push(email);
            return email;
        } else {
            const dados = {
                temErro: true,
                campo: "Email",
                mensagem: "Email inválido"
            };
            return dados
        }
    }

    validarNome(nome) {
        if (typeof nome === 'string' && nome.trim() !== "") {
            this.listaDeObjetos.push(nome);
            return nome;
        } else {
            const dados = {
                temErro: true,
                campo: "Nome",
                mensagem: "Nome não pode ser vazio"
            };
            return dados
        }
    }

    async executa() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            this.listaDeObjetos = JSON.parse(data);
            const validacoes = this.listaDeObjetos.map(objeto => {
                const dados = {
                    nome: this.validarNome(objeto.nome) ? objeto.nome : { temErro: true, campo: "Nome", mensagem: "Nome não pode ser vazio" },
                    email: this.validarEmail(objeto.email) ? objeto.email : { temErro: true, campo: "Email", mensagem: "Email inválido" },
                    senha: this.validarSenha(objeto.senha)
                };
                return dados;
            });
    
            console.log("Validações:", validacoes);
            await this.descartaContasInvalidas(validacoes);
    
            return validacoes; // Retorna 'validacoes' opcionalmente se necessário
        } catch (error) {
            console.error('Erro ao ler ou validar os dados:', error);
            return [];
        }
    }

    async descartaContasInvalidas(validacoes) {
        if (!Array.isArray(validacoes)) {
            console.error('Os dados de validação são inválidos ou estão ausentes.');
            return;
        }

        const contasValidas = validacoes.filter(dados => !dados.nome.temErro && !dados.email.temErro && !dados.senha.temErro);
        console.log("Contas válidas:", contasValidas);

        const filePathValidate = 'dados/contasValidadas.json';
        try {
            await fs.promises.writeFile(filePathValidate, JSON.stringify(contasValidas, null, 2));
            console.log("Contas válidas salvas com sucesso no arquivo!");
        } catch (error) {
            console.error('Erro ao salvar as contas válidas:', error);
        }
    }
}

const filePathInvalidate = 'dados/contas.json';
const validador = new CriaContaValidador(filePathInvalidate);
validador.executa();








