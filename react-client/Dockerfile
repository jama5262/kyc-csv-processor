FROM node:alpine

WORKDIR /build

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]