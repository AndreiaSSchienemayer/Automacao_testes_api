# API de Transferências e Usuários

Esta API permite registrar usuários, realizar login, consultar usuários e efetuar transferências de valores entre usuários. O objetivo é servir de base para estudos de testes e automação de APIs.

## Tecnologias
- Node.js
- Express
- Swagger (documentação)

## Instalação

1. Clone o repositório ou copie os arquivos para sua máquina.
2. Instale as dependências:

```
npm install express swagger-ui-express
```

## Como rodar a API

```
node server.js
```

A API estará disponível em `http://localhost:3000`.

## Documentação Swagger

Acesse a documentação interativa em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints

### Registro de Usuário
- **POST** `/register`
- Body: `{ "username": "string", "password": "string", "favored": true|false }`
- Não permite usuários duplicados.

### Login
- **POST** `/login`
- Body: `{ "username": "string", "password": "string" }`
- Login e senha obrigatórios.

### Listar Usuários
- **GET** `/users`
- Retorna lista de usuários (sem senha).

### Transferência de Valores
- **POST** `/transfer`
- Body: `{ "from": "string", "to": "string", "amount": number }`
- Só permite transferências acima de R$ 5.000,00 para usuários marcados como "favorecido".

## Observações
- O banco de dados é em memória, os dados são perdidos ao reiniciar a aplicação.
- O saldo inicial de cada usuário é R$ 10.000,00.

## Testes
- O arquivo `app.js` pode ser importado em ferramentas de teste como Supertest.

---

Dúvidas ou sugestões? Abra uma issue ou entre em contato.
