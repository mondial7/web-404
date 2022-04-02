FROM node:alpine
WORKDIR /usr/src/app
COPY package.json ./
#COPY yarn.lock ./
#RUN yarn install
#COPY src ./src
#COPY public ./public
#COPY .env ./
#RUN yarn run build
RUN yarn global add serve
EXPOSE 5000
CMD [ "serve", "-s", "build" ]