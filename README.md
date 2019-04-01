# WTT - WEBAPP 

# Overview

Esta aplicação foi feita em Vuejs através do vue-cli, sendo que mesma está utilizando Vuex e Vue-router para seu melhor funcionamento

# Desgin e Estilo

Foi utilizado o Bootstrap-vue que nada mais é que uma versão do Bootstrap 4 adaptada para o Vue, a aplicação é responsiva se adapatando a diversos tipos de dispositivos e conta  também com o conceito de PWA. Além disso está utilizando Sass como pré-processador de CSS ainda que bem pouco.

# Docker 

Para rodar no Docker é necessário fazer o build da imagem que está configurado no Dockerfile, para isso com o Docker instalado execute os seguintes comandos no terminal: 
- $ git clone https://github.com/vinniimiranda/wtt-webapp.git
- $ cd wtt-webapp
- $ docker build -t wtt-webapp .
- $ docker docker run -p 8080:8080 -h 0.0.0.0 wtt-webapp

Acesse em: http://0.0.0.0:8080

A aplicação será subida em um container e você pode acessa-la normalmente.


# Rodando o projeto

Para rodar esse projeto em localhost como desenvolvimento é necessário possuir o Vue-cli, entranto a versão webpack está disponível na pasta /dist.

Instruções: 
- $ git clone https://github.com/vinniimiranda/wtt-webapp.git
- $ cd wtt-webapp 
- $ yarn install
- $ yarn start ou yarn serve (em caso de vue-cli apenas)

A WebApp será acessível pelo link: http://localhost:8080

# Deploy

Esta WebApp está hospedada/rodando no Heroku e pode ser acessada pelo link: https://wtt-webapp.herokuapp.com/

