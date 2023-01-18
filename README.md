# VOID
Um blog fullstack feito em Next JS e Express.

## Como usar ?

Precisa do [Node.js](https://nodejs.org/) para rodar.

Clone esse repositório

```sh
git clone https://github.com/willianlouza/void-blog-fullstack.git
```


Instale todas as dependências e configure as variáveis de ambiente

```sh
cd void-blog-fullstack
npm run config:install
npm run config:env
```

Variáveis de ambiente Backend

```js
//./backend/.env

PORT="8080"
DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>"
TOKEN_SECRET="<YOUR_STRONG_SECRET>"
```

Variáveis de ambiente Frontend

```js
//./frontend/.env

API_URL="http://localhost:8080/api"
```

Para fazer a migração de dados pro banco de dados

```sh
npm run migrate
```

Inicie a API primeiro

```sh
npm run start:api
```

Agora inicie o Frontend

```sh
npm run start:front
```

## Perfeito!

Com a api e o frontend rodando, basta acessar:
> http://localhost:3000
