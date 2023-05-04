const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Página Inicial!</h1>');
});

app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre nós</h1>');
});

app.get('/contato', (req, res) => {
  res.send('<h1>Contato</h1>');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
