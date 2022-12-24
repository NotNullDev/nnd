FROM node:18.12.1-alpine

COPY package* .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000
RUN yarn start --host