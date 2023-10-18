FROM node:16-alpine

RUN apk update && apk add tzdata
ENV TZ="America/Sao_Paulo"

RUN apk add --no-cache git openssh

WORKDIR  /home/breno/API/backend-compras-mercado/

RUN npm i -g @nestjs/cli

COPY package*.json ./

ENV NODE_ENV production

RUN npm install

COPY . .
#COPY .env.producao ./.env

RUN nest build

CMD ["node", "dist/main"]