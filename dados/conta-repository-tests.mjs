import { criaUsuario } from "../casos-de-uso/cria-usuario.mjs";
import { salva } from "./contas.repository.mjs";
import { lista } from "./contas.repository.mjs";


criaUsuario("BeatrizLindona", "beatriz@emial.com", "senha");
criaUsuario("Beatriz fofa", "beatriz@miaumiau.com", "senha123");
criaUsuario("Beatriz fofa", "beatriz", "far");
criaUsuario("Tati Neguinha do roseira", "tati.24rsaazuis@aesperadafelicidade.com", "tati tatonilda testilson")
salva();
lista();







