const express = require('express'); // Importação do Express 
const app = express(); //Criação de um aplicativo Express.js chamado 'app'

app.get('/', (req, res) => {
  res.send('<h1>Página Inicial!!</h1>'); //Definição das rotas 
}); // res.send servidor enviando resposta ao cliente

app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre nós</h1>');
});

app.get('/contato', (req, res) => {
  res.send('<h1>Contato</h1>');
});

const PORT = 3000; // Configuração do servidor para escurtar na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
