# React + TypeScript + Vite

# Documentação Frontend

### Visão Geral

Este projeto é um sistema de forum desenvolvido utilizando tecnologias modernas de frontend. O objetivo é criar uma aplicação responsiva e eficiente, com autenticação via JWT e uma integração completa com uma API backend para operações como login, cadastro, exibição de tópicos e criação de comentários no fórum.

### Tecnologias Utilizadas

-- React com TypeScript

- Utilizado para construção dos componentes da aplicação com tipagem estática, aumentando a robustez e previsibilidade do código.

-- Vite

- Ferramenta de build para desenvolvimento rápido, focada em otimização de tempo de carregamento e desenvolvimento ágil, sendo altamente integrada com o ecossistema React.

-- Material UI

- Biblioteca de componentes para React que fornece uma UI limpa e moderna, com componentes estilizados prontos para produção.

-- Axios

- Utilizado para fazer requisições HTTP à API backend, incluindo autenticação com tokens JWT e comunicação entre frontend e backend para operações CRUD.

-- React Router DOM

- Gerencia as rotas da aplicação, incluindo a configuração de rotas privadas para proteger páginas que requerem autenticação.

-- Styled Components

Biblioteca para estilização, permitindo escrever CSS diretamente nos componentes React de forma modular e reutilizável.

-- JWT-decode

Usado para decodificar e validar o token JWT recebido após o login, para autenticar usuários nas rotas privadas.

-- Zod

Utilizado para validação de dados, garantindo que as informações fornecidas no frontend sejam consistentes antes de serem enviadas para a API.

### Estrutura de Pastas

src/
│
├── api/  
│ ├── messages.ts # APIs relacionadas a mensagens
│ └── topics_api.ts # APIs relacionadas a tópicos
│
├── assets/ # Recursos estáticos, como imagens e fontes
│
├── components/ # Componentes reutilizáveis
│ ├── form-components/  
│ │ ├── TopicSelect.tsx
│ │
│ ├── forum-hook/  
│ │ ├── forum-view.tsx  
│ │ ├── topic-create.tsx  
│ │ └── topiclist.tsx
│
├── dtos/ # Data Transfer Objects (DTOs) - Tipos e interfaces
│ ├── ILogin.ts
│ ├── IMessages.ts
│ ├── ITopics.ts
│ └── IUser.ts
│
├── environments/ # Configurações de ambiente
│
├── hooks/ # Hooks customizados
│ ├── auth.tsx # Hook de autenticação
│
├── layouts/ # Layouts gerais da aplicação
│ ├── BaseLayoutPage.tsx
│
├── pages/ # Páginas principais
│ ├── Dashboard/  
│ │ └── Dashboard.tsx
│ ├── Login/  
│ │ ├── Login.tsx  
│ ├── Sign-up/  
│ │ ├── Sign-up.tsx  
│
├── routes/ # Rotas da aplicação
│ ├── index.tsx  
│ ├── OpenRoutes.tsx  
│ └── PrivateRoutes.tsx
│
├── services/ # Serviços e configuração de APIs
│ ├── api/  
│ │ ├── axios-config/
│ │ │ ├── interceptors/  
│ │ │ │ ├── errorInterceptors.ts
│ │ │ │ ├── responseInterceptors.ts
│ │ │ │ └── tokenInterceptor.ts
│ │ │ └── index.ts
│ │
│ └── index.ts # Exportação dos serviços principais
│
├── shared/ # Recursos ou funções compartilhadas (pode conter utilitários)
│ └── utils/ # Funções utilitárias
│ └── getValidationErrors.ts
│
├── styles/ # Arquivos de estilos globais e temas
│ ├── themes/  
│ │ ├── themeApp.ts
│ └── index.ts # Exporta o tema e estilos globais
│
├── App.tsx # Arquivo principal da aplicação
├── main.tsx # Ponto de entrada da aplicação
├── vite-env.d.ts # Arquivos de tipos do Vite
├── global.css # Estilos globais
├── index.html # Template principal do HTML
├── tsconfig.json # Configurações TypeScript
├── tsconfig.node.json # Configuração específica do node
├── vite.config.ts # Configuração do Vite
├── .gitignore # Git ignore
├── .eslintrc.js # Configuração ESLint
└── README.md # Arquivo de documentação inicial

### Passos para Executar a Aplicação

Certifique-se de ter o seguinte instalado em seu ambiente de desenvolvimento:

Node.js (versão 22.11.0)
npm

-- Verifique a versão do Node.js e npm com os comandos:

node -v
npm -v

-- Instalação de Dependências:

git clone https://github.com/allysonedu/Forum.git

cd frontend

code .

-- Instale as dependências do projeto executando o comando:

npm install

-- Iniciando a Aplicação:

npm run dev

**Manutenção e Contribuição**

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua nova feature ou correção de bug (`git checkout -b minha-feature`).
3. Faça suas alterações.
4. Envie um pull request.

### OBRIGADO PELA OPORTUNIDADE!
