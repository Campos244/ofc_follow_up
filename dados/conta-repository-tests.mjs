import { CriaUsuario }  from "../casos-de-uso/cria-usuario.mjs";
import { ContaRepository, Postagens } from "../dados/contas-repository.mjs";
import { CriaPostagem } from "../casos-de-uso/cria-usuario.mjs";


/*criaUsuario("Maria Santana", "santanaMarina@email.com", "senha");
criaUsuario("Beatriz Campos", "beatriz@gmail.com", "senha123");
criaUsuario("Pandinha fofa", "panda", "far");
criaUsuario("Tatiane Campos", "tati.24@outlook.com", "tatitatonilda")
criaUsuario("Alura Alurinha Alurona", "alura@alura.com", "cael")
criaUsuario("Bruno", "bruno@gmail.com", "BRUNO1234")
salva();
lista();*/



const contaRepo = new ContaRepository();
export const criaUsuarioCasoDeUso = new CriaUsuario(contaRepo);

const postagens = new Postagens();
export const criaPostagemCasoDeUso = new CriaPostagem(postagens);

    criaUsuarioCasoDeUso.executa('João', 'joao@email.com', '')
    .then((texto) => console.log(texto))
    .catch((error) => console.error(error));

    criaUsuarioCasoDeUso.executa('Bia', 'bea@email.com', 'senha123')
    .then((texto) => console.log(texto))
    .catch((error) => console.error(error));

    criaUsuarioCasoDeUso.executa('Lorena', 'lorena@email.com.br', 's123')
    .then((texto) => console.log(texto))
    .catch((error) => console.error(error));

    const publicacaoSalva = criaPostagemCasoDeUso.executaPostagem('João', 'Olá, essa é a minha primeira postagem!');
        console.log('Publicação salva:', publicacaoSalva);


