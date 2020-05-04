FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
RUN yarn global add serve
COPY src ./src
COPY public ./public
COPY .env ./
RUN yarn run build
EXPOSE 5000
CMD [ "serve", "-s", "build" ]