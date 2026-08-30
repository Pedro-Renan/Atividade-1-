const http = require('http');
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'atividade01';

let db = null;

const client = new MongoClient(MONGO_URL);
client.connect()
  .then(() => {
    db = client.db(DB_NAME);
    console.log('Conectado ao MongoDB em', MONGO_URL);
  })
  .catch((err) => {
    console.error('Não foi possível conectar ao MongoDB:', err.message);
  });

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ mensagem: 'Servidor Node rodando com sucesso!' }));
    return;
  }

  if (req.url === '/status' && req.method === 'GET') {
    if (!db) {
      res.writeHead(503);
      res.end(JSON.stringify({ status: 'indisponivel', banco: 'desconectado' }));
      return;
    }
    try {
      await db.command({ ping: 1 });
      res.writeHead(200);
      res.end(JSON.stringify({ status: 'ok', banco: 'conectado' }));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ status: 'erro', banco: 'desconectado' }));
    }
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});