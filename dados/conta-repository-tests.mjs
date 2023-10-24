import { criaUsuario } from "../casos-de-uso/cria-usuario.mjs";
import { salva } from "./contas.repository.mjs";
import { lista } from "./contas.repository.mjs";


criaUsuario("Maria Santana", "santanaMarina@email.com", "senha");
criaUsuario("Beatriz Campos", "beatriz@gmail.com", "senha123");
criaUsuario("Pandinha fofa", "panda", "far");
criaUsuario("Tatiane Campos", "tati.24@outlook.com", "tatitatonilda")
criaUsuario("Alura Alurinha Alurona", "alura@alura.com", "cael")
criaUsuario("Bruno", "bruno@gmail.com", "BRUNO1234")
salva();
lista();







