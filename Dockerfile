FROM node:18.10.0-alpine3.15

RUN apk add vim

RUN apk add git
RUN git clone https://github.com/hardcore-thinking/game-review-ynov.git

WORKDIR /usr/src/app/game-review-ynov/game-review

RUN npm update
RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 3008

CMD ["serve", "-s", "build"]