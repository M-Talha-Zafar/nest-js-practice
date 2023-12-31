FROM node:20.4.0

WORKDIR /app

COPY . . 

RUN npm install

CMD ["npm", "run", "start:dev"]
