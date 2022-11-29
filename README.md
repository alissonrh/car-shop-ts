<h1 align="center">Projeto Car Shop API</h1>

## Descrição

O projeto foi desenvolvido com a finalidade de aplicar os princípios de Programação Orientada a Objetos (`POO`) para a construção de uma API com `CRUD` para gerenciar uma concessionária de veículos. 

## Tecnologias e Ferramentas

Este projeto **Back-end** foi desenvolvido em ambiente `Docker`,  com `TypeScript`. A API foi desenvolvida utilizando o método TDD (_Test Driven Development_), para testar a camada service utilizando `Sinon`. A escrito do código foi de acordo com o paradigma da _Programação Orientada a Objetos_. O back-end foi construído utilizando `TypeScript`,  `Node.js`,  `Express`. No gerenciamento de dados foi utilizando o banco de dados `MongoDB` através do framework do `Mongoose`.

## Instalando e executando o aplicativo com Docker

```
 git clone git@github.com:alissonrh/car-shop-ts.git
 cd car-shop-ts
 docker-compose -d up
 docker exec -it car_shop bash 
 npm i
 npm run dev
```