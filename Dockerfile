FROM node:12-alpine

COPY package.json .
COPY app.js .

RUN npm install

EXPOSE  8080

CMD npm start
