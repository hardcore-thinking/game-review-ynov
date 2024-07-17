FROM node:18.10.0-alpine3.15 AS react

WORKDIR /usr/src/app

COPY ./game-review/ ./.

RUN npm update
RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 3008-3009

CMD ["serve", "-s", "build"]

FROM node:18.10.0-alpine3.15 AS api

WORKDIR /usr/src/api

COPY ./server ./.

RUN npm update
RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]

ENV NODE_ENV="production"

FROM mysql:5.7 AS db

WORKDIR /usr/src/app

COPY db-init.sql .