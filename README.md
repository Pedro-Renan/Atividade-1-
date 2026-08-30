# Atividade 01 — Servidor Node + Docker + MongoDB

Servidor HTTP básico em Node.js, containerizado com Docker e integrado a um banco MongoDB via Docker Compose. Atividade prática em dupla, cobrindo GitHub Codespaces, containerização e fluxo de Git (branch + Pull Request).

## Tecnologias

- Node.js (módulo `http` nativo)
- MongoDB (driver oficial `mongodb`)
- Docker e Docker Compose
- GitHub Codespaces

## Como executar

```bash
docker compose up --build
```

O servidor sobe em `http://localhost:3000` e o MongoDB em `localhost:27017`. Para parar:

```bash
docker compose down
```

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | `/` | Confirma que o servidor está rodando |
| GET | `/status` | Verifica a conexão com o MongoDB |

## Estrutura

- `app.js` — servidor HTTP
- `Dockerfile` — imagem da aplicação
- `docker-compose.yml` — orquestração da aplicação + MongoDB

## Autor

# Pedro Renan Rodrigues da Silva 
# João Victor Crispim Pinheiro 
