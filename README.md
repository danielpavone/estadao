## Descrição
Aplicação criada para o teste do [Estadão](https://estadao.com.br/), criação de CRUD de Notícias, utilizando express. O Front foi feito em ReactJS. A aplicação deve listar as notícias, e ao clicar sobre ela deverá navegar para a notícia completa.

## Instalação

É necessário ter instalado o Git/Docker para a execução do projeto.

* [Git Install](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Docker Install](https://docs.docker.com/engine/install/)

Ao finalizar a instalação acima, você deve clonar o projeto no diretório de sua preferência.

```bash
git clone git@github.com:danielpavone/estadao.git
```

```bash
cd estadao
```

Você terá duas pastas `Backend` e `Frontend`

1. Entre na pasta `backend\news`
```bash
cd backend/news
```
2. Execute o commando
```bash
docker-compose up -d
```
O docker irá orquestrar a inicialização da nossa aplicação, que estará disponível no endereço `http://localhost:3000`

3. Métodos disponíveis
```bash
GET (http://localhost:3000/news) - Listar todas as news
POST (http://localhost:3000/news) - Criar uma nova news
GET (http://localhost:3000/news/ID) - Listar uma news pelo ID
PUT (http://localhost:3000/news) - Atualizar a news
DELETE (http://localhost:3000/news) - Remover a news
```

4. Abra uma nova aba do terminal e navegue até a pasta do projeto
```bash
cd estadao/frontend
```

5. Execute o commando
```bash
docker-compose up -d
```
O docker irá orquestrar a inicialização da nossa aplicação, que estará disponível no endereço `http://localhost:3001`
