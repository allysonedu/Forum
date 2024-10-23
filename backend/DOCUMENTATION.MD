# Projeto: Gerenciador de Tópicos do Fórum

Este é um sistema de backend para gerenciar um fórum, permitindo a criação de tópicos, postagem de respostas e organização por categorias. A API suporta operações de CRUD (criar, ler, atualizar e deletar) para tópicos e respostas, além de fornecer recursos de autenticação e autorização.

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- JWT (Json Web Token) para autenticação
- Knex.js como Query Builder para banco de dados

## Instalação

### Pré-requisitos:

- Node.js v20.11.0
- Docker (para rodar o banco de dados em container)
- Git

### Passos:

Clone o repositório

git clone https://github.com/allysonedu/Forum.git
cd Forum

### Instale as dependências:

npm insatll

### Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com os seguintes valores:

DB_CLIENT=pg
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=bancoforum
DB_USER=forumusers
DB_PASSWORD=1234567

### Execute a aplicação:

npm start

````markdown
## Autenticação e Autorização

A API utiliza JWT (Json Web Token) para autenticação. Os usuários devem se autenticar para acessar rotas protegidas.

### Fluxo de Autenticação:

1. O usuário faz login em `/api/auth/login` com suas credenciais (email e senha).
2. Se as credenciais forem válidas, um token JWT é gerado e retornado.
3. O token deve ser enviado no cabeçalho **Authorization** das requisições subsequentes.

Exemplo de cabeçalho de requisição com o token JWT:

```bash
Authorization: Bearer <token_jwt_aqui>
```
````
