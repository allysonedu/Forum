# Projeto: Gerenciador de Tópicos do Fórum

Esta aplicação backend foi desenvolvida para oferecer funcionalidades de um fórum, permitindo a criação e gerenciamento de tópicos e mensagens, além do controle de usuários. A aplicação é construída em Javascript e utiliza várias bibliotecas para funcionalidades de autenticação, tratamento de erros, gerenciamento de banco de dados e outras operações fundamentais.

## Funcionalidades

- _Cadastro de Usuários_: Usuários podem se registrar e criar contas para acessar o fórum.
- _Login de Usuários_: Login seguro utilizando JWT, que gera um token de autenticação.
- _Criação de Tópicos_: Usuários logados podem criar tópicos no fórum.
- _Edição de Tópicos_: Usuários logados podem editar tópicos no fórum.
- _Deleção de Tópicos_: Usuários podem deletar os tópicos que criaram.
- _Criação de Mensagens_: Usuários podem adicionar mensagens em tópicos.
- _Deleção de Mensagens_: Usuários podem excluir suas próprias mensagens.
- _Privação de Rotas_: Rotas protegidas para garantir que apenas usuários autenticados realizem operações sensíveis.

## Tecnologias e Bibliotecas Utilizadas

- _Node.js_
- _PostgreSQL_
- _JWT (Json Web Token) para autenticação_
- _bcrypt_: Utilizado para hash de senhas, garantindo a segurança dos dados do usuário.
- _celebrate_: Middleware de validação de dados com Joi, que auxilia na verificação de entradas.
- _cors_: Para configurar o compartilhamento de recursos entre origens diferentes (Cross-Origin Resource Sharing).
- _dotenv_: Gerencia as variáveis de ambiente a partir de um arquivo .env.
- _express_: Framework para criação de APIs RESTful.
- _express-async-errors_: Permite o tratamento de erros assíncronos.
- _jsonwebtoken_: Implementa tokens JWT para autenticação de usuários.
- _knex_: Query builder usado para criação, manipulação e consulta de tabelas no PostgreSQL.
- _nodemailer_: Para envio de e-mails, usado em casos como confirmações e notificações.
- _pg_: Conector para PostgreSQL.
- _youch_: Formata erros de maneira amigável e compreensível.

## Instalação

### Pré-requisitos:

- Node.js v20.11.0
- Docker (para rodar o banco de dados em container)
- Git
- Configurar o arquivo .env com as variáveis de ambiente adequadas, como detalhes de conexão ao banco e chave para JWT.

### Passos para Iniciar a Aplicação

1. _Clonar o repositório_:

git clone https://github.com/allysonedu/Forum.git
cd Forum
cd backend

2. _Instalar dependências_:
   bash
   npm install

3. _Configure as variáveis de ambiente_

- Crie um arquivo .env na raiz do projeto com os seguintes valores:

DB_CLIENT=pg
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=bancoforum
DB_USER=forumusers
DB_PASSWORD=1234567

4. _Iniciar a aplicação em modo de desenvolvimento_:
   bash
   npm run dev

````markdown
## Estrutura de Scripts

A estrutura de scripts foi configurada no package.json para simplificar o gerenciamento das migrações do banco de dados:

- **create:migration**: Cria uma nova migração para o banco. Execute com um nome específico:
  bash
  npm run create:migration nome_da_migracao

- **run:migration**: Executa as migrações pendentes:
  bash
  npm run run:migration

- **rollback:migration**: Reverte a última migração aplicada:
  bash
  npm run rollback:migration

- **run:table2**: Script configurável para execução de migrações específicas (ajuste conforme necessário para seu projeto).

### Exemplo de Migração com Knex

Para criar uma nova tabela, execute:
bash

npm run create:migration nome_da_migracao

No arquivo de migração gerado, defina as colunas e relações, por exemplo:

javascript
exports.up = function(knex) {
return knex.schema.createTable('users', (table) => {
table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
table.string('name').notNullable();
table.string('email').unique().notNullable();
table.string('password').notNullable();
table.timestamps(true, true);
});
};

exports.down = function(knex) {
return knex.schema.dropTable('users');
};

Para aplicar ou reverter migrações, use:

bash
npm run run:migration # Aplica migrações pendentes
npm run rollback:migration # Reverte a última migração

## Endpoints Principais

### Usuários

- _POST /register_ - Cadastro de novo usuário
- _POST /login_ - Login de usuário

### Tópicos

- _POST /topics_ - Criação de novo tópico
- _PUT /topics/_ - edição de tópico
- _DELETE /topics/:id_ - Deleção de tópico

### Mensagens

- _POST /messages_ - Criação de nova mensagem em um tópico
- _PUT /messages/messages/:id_ - edição de mensagem
- _DELETE /messages/:id_ - Deleção de uma mensagem

## Autenticação e Autorização

A API utiliza JWT (Json Web Token) para autenticação. Os usuários devem se autenticar para acessar rotas protegidas.

### Fluxo de Autenticação:

1. O usuário faz login com suas credenciais (email e senha).
2. Se as credenciais forem válidas, um token JWT é gerado e retornado.
3. O token deve ser enviado no cabeçalho **Authorization** das requisições subsequentes.

Exemplo de cabeçalho de requisição com o token JWT:

```bash
Authorization: Bearer <token_jwt_aqui>
```
````

**Manutenção e Contribuição**

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua nova feature ou correção de bug (`git checkout -b minha-feature`).
3. Faça suas alterações.
4. Envie um pull request.

Certifique-se de rodar os testes antes de submeter sua contribuição.

### OBRIGADO PELA OPORTUNIDADE!
