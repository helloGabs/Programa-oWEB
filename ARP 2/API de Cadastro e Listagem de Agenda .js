//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Gabriel Cintra Brandao
//DATA: 21/05/2023

const express = require('express');
const app = express();

app.use(express.json());

// Simulando um banco de dados em memória
let agenda = [];

// Rota para cadastrar um novo evento na agenda
app.post('/agenda', (req, res) => {
  const evento = req.body;
  agenda.push(evento);
  res.status(201).json({ message: 'Evento cadastrado com sucesso!' });
});

// Rota para listar todos os eventos da agenda
app.get('/agenda', (req, res) => {
  res.json(agenda);
});

// Iniciando o servidor
app.listen(3000, () => {
  console.log('API de agenda rodando na porta 3000.');
});

//Importamos o módulo express e criamos uma instância do aplicativo Express.
//Configuramos o aplicativo para utilizar o middleware express.json() para fazer o parsing de requisições com formato JSON.
//Criamos uma variável agenda para simular um banco de dados em memória.
//Definimos a rota POST /agenda para cadastrar um novo evento na agenda. A rota recebe um evento no corpo da requisição e o adiciona ao array agenda. A resposta retorna um código de status 201 (Created) indicando sucesso.
//Definimos a rota GET /agenda para listar todos os eventos da agenda. A resposta retorna o array agenda em formato JSON.
//Iniciamos o servidor na porta 3000 e exibimos uma mensagem no console para indicar que a API está em execução.