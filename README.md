### Iniciando o projeto

#### Criar uma rede externa com o Docker

```bash
docker network create services
```

#### Extrai uma imagem associada a um serviço

```bash
docker-compose build --pull node
```

#### Instalar dependências

```bash
docker-compose run --rm node npm i
```

#### Iniciar o projeto

```bash
docker-compose up
```

#### Inicie o banco de dados

```bash
docker-compose up database
```

#### Para derrubar o banco de dados e todos os dados

```bash
docker-compose down -v
```

#### Para executar testes

```bash
docker-compose run --rm node npm run test # Run tests normally

docker-compose run --rm node npm run test:watch # Run tests in watch mode

docker-compose run --rm node npm run test:debug # Run tests in debug mode

docker-compose run --rm node npm run test:cov # Run tests with coverage report
```

#### Para executar eslint

```bash
docker-compose run --rm node npm run lint
```
