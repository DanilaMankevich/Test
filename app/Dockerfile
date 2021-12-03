FROM node:carbon as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


FROM node:carbon-alpine
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

EXPOSE 3000

CMD [ "npm", "start" ]