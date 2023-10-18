FROM node:18

WORKDIR /usr/src/app

# COPY package*.json ./
COPY server /usr/src/app/

# RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]