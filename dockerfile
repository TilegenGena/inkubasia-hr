FROM node:18

# COPY package*.json ./
WORKDIR /app
COPY . .


WORKDIR /app/server
RUN npm install
RUN npm build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]