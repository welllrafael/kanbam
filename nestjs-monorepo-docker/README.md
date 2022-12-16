<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Executando o Repositório

```bash
# running
$ docker compose up -d

# Observações
É possível também subir somemte um serviço do docker compose. Por exemplo: 

$ docker compose up -d grafana

```

## Ferramentas Utilizadas e Plugadas

```bash
Dentro deste projeto, procurei mesclar ferramentas e práticas que podem nos ajudar no dia-a-dia. Abaixo estarei relacionando de forma simples e objetiva o que foi utilizado:

# ELK - Elasticsearch / Logstash / Kibana / Filebeat
Utilizei a stack ELK para capturar os logs gerados da aplicação no container. Esses logs serão processados e apresentados no Kibana.

# Prometheus
Estou utilizando o Prometheus para captura de métricas. Neste caso, adicionei dentro do código dos 2 projetos um exemplo simples de como capturar essas métricas.

# Grafana
O Grafana irá nos auxiliar na apresentação das métricas geradas pelo Prometheus. É um software bem completo e atende muito bem a demonstração de painéis.

# Monorepo
Estou utilizando o conceito de Monorepo neste projeto, porém realizei algumas modificações em relação a prática sugerida dentro da documentação do NestJS. Resumindo, eu não unifiquei, por exemplo, o package.json dos projetos, pois no conceito de microsserviço, na minha opinião, cada projeto terá suas bibliotecas e dependências que de fato serão utilizadas.

# Projeto dockerizado
Como você pode ver, o projeto está totalmente dockerizado.

```

## Falando de Código...

```bash
Neste projeto eu procurei adicionar algumas coisinhas no código.

# Padrão de Projeto: Factory Method e Repository Pattern
Conforme a estrutura de pastas, eu dividi o serviços, módulos, interfaces, etc. No código, procurei utilizar o padrão Factory Method e Repository Pattern. Segue o link com os detalhes:

https://refactoring.guru/design-patterns/factory-method

# SOLID
Procurei escrever os códigos utilizando os princípios do SOLID. 

# gRPC
Neste projeto eu implementei um exemplo simples e funcional de como utilizar a comunicação gRPC. 
O server-gRPC será o projeto First-Consumer e o client-gRPC será o projeto Main-Receiver. Resumindo...você acionará a rota do Main-Receiver(existe um controller separado para isso) para que ele acione o First-Consumer.

# Microsserviço
Apesar da simplicidade do código, neste exemplo podemos ver a comunicação dos 2 serviços via gRPC. Isso pode ser aplicado no dia-a-dia da forma que for necessária.

# Debug
Conforme o launch.json do projeto, caso seja necessário, ele já está pronto para realizar o debug da aplicação rodando dentro do próprio container. 
Para fazer isso, basta a aplicação estar no ar, acessar a aba "Run and Debug" do VSCode, selecionar qual serviço deseja debugar e dar um play. Inclusive, é possível debugar os 2 serviços existentes ao mesmo tempo!

# hot reload
Caso seja feita qualquer mudança no projeto, basta salvar o arquivo alterado que a própria aplicação irá reiniciar e aplicar a alteração. Isso foi feito para os dois projetos.

```