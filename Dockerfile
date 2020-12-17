FROM node:latest

WORKDIR /var/www

RUN npm install -g webpack-cli

COPY . .

ENV DEBUG=*
RUN npm install

ENV NODE_ENV=production
RUN npm run build

CMD node -r esm dist/index.js