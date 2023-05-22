//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Gabriel Cintra Brandao
//DATA: 21/05/2023


const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let pacientes = [];

// Rota para listar todos os pacientes
app.get('/pacientes', (req, res) => {
  res.json(pacientes);
});

// Rota para cadastrar um novo paciente
app.post('/pacientes', (req, res) => {
  const paciente = req.body;
  pacientes.push(paciente);
  res.status(201).json(paciente);
});

app.listen(port, () => {
  console.log(`API de Cadastro de Paciente rodando em http://localhost:${port}`);
});

//No código fornecido, estamos criando uma API de Cadastro de Paciente usando o framework Express.js. O código configura um servidor que aceita solicitações HTTP e fornece rotas para cadastrar e obter pacientes.

//Importamos o módulo express e criamos uma instância do aplicativo Express.js.
//Configuramos o Express.js para analisar o corpo das solicitações como JSON.
//Criamos uma variável pacientes como uma matriz vazia para armazenar os dados dos pacientes.