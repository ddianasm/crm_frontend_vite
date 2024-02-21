FROM node:18 as build
WORKDIR /app

COPY package.json .
RUN npm i
COPY . .

CMD ["sh","-c","npm i; npm run dev;"]