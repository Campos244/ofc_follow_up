import  express  from 'express';
import { CriaUsuario } from './casos-de-uso/cria-usuario.mjs'; // Importe a classe CriaUsuario do arquivo correspondente
import { ContaRepository } from './dados/contas-repository.mjs'; // Importe o repositório de contas do arquivo correspondente
import { EntidadeConta } from './entidades/conta.entity.mjs'; // Importe a entidade de conta do arquivo correspondente
import { RemoveContaRequest } from './remove-conta-request.mjs';


const app = express();
const port = 3000; 

const contaRepository = new ContaRepository();
const criaUsuario = new CriaUsuario(contaRepository);
const removeContaRequest = new RemoveContaRequest(contaRepository);

app.use(express.json())

app.post('/criar-conta', (req, res) => {
    
    const { nome, email, senha } = req.body;

    const novoUsuario = criaUsuario.executa(nome, email, senha);
    res.json(novoUsuario);
})

app.delete('/deletar-conta/:id', (req, res) => {
    const idConta = req.params.id;
    const resultado = removeContaRequest.remove(idConta);
    res.json(resultado);
})


app.listen(port, () => {
    console.log(`Servidor Express rodando em http://localhost:${port}`);
  });

