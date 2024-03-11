import fs from "fs";

class criaPublicacaoValidador{

    constructor (filePathInvalidate){
        this.filePathInvalidate = filePathInvalidate,
        this.listaPublicacoes = []
    }

    validarId(id){
        if ( id != ' '){
            console.log("Id validado", id)
        }else{
            console.error("Id vazio")
            return temErro = true
        }
    }

    validarMensagem(mensagem){
        if (mensagem != ' ' ){
            console.log("Publicação validada:", mensagem)
        }else{
            console.error("Mensagem vazia")
            return temErro = true
        }
    }
   

    executa(){
        const dadosPublicacao = fs.readFileSync(this.filePathInvalidate, 'utf-8')
        this.listaPublicacoes = JSON.parse(dadosPublicacao)

        const validacoesPublicacoes = this.listaPublicacoes.map( objeto => {
            const dados = {
                id: this.validarId(objeto.id),
                mensagem: this.validarMensagem(objeto.mensagem)
            }

            return dados
        } )
    }


}

const filePathInvalidate = 'dados/publicacoes.json';
const validador = new criaPublicacaoValidador(filePathInvalidate);
validador.executa();
