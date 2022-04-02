FROM node:alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY src ./src
COPY .env ./
EXPOSE 3000
CMD [ "yarn", "start" ]