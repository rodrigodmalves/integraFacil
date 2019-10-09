FROM node:10.16.3

RUN useradd --user-group --create-home integraFacil &&\
  npm install --global npm@6.9.0

ENV HOME=/home/integraFacil

COPY package.json npm-shrinkwrap.json $HOME/
RUN chown -R integraFacil:integraFacil $HOME/*

USER root
WORKDIR $HOME
RUN npm cache clean --force && npm install
COPY . $HOME
RUN chown -R integraFacil:integraFacil $HOME/*
USER integraFacil
CMD ["npm", "start"]