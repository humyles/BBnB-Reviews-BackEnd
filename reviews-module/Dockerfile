FROM node:10-alpine

RUN mkdir -p /home/pl/app

WORKDIR /home/pl/app

COPY . ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]