FROM mhart/alpine-node:10

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .


EXPOSE 1234
CMD node index.js