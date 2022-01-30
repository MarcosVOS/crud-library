# Projeto gerenciamento-biblioteca
sistema de gerenciamento de uma biblioteca!

## Para rodar esse projeto e necessário ter o mongoDb e o NodeJS instalado  

### Para rodar esse projeto é necessário instalar as seguintes dependência  
~~~~
npm install yarn
yarn add - D sucrase nodemon
yarn add typescript express cors mongoose
~~~~
### Para rodar o projeto execute o comando 
~~~~ 
yarn dev                                   
~~~~



# Rotas da aplicação:
### [POST] http://localhost:3333/obras 
CORPO DA REQUISIÇÃO
~~~~ 
{
  "titulo":"-------",
  "editora":"-------",
  "foto":"-------",
  "autores":"-------"
}
~~~~
### [GET] http://localhost:3333/obras/
Retorna todas as obras cadastradas

### [PUT]  /obras/:id: : 
Atualiza as informações de titulo, editora, foto e autores da obra com o id presente na rota
<br>
CORPO DA REQUISIÇÃO
~~~~ 
{
  "titulo":"-------",
  "editora":"-------",
  "foto":"-------",
  "autores":"-------"
}
~~~~
### [DELETE]  /obras/:id: : 
Deleta a obra com o id presente nos parâmetros da rota





