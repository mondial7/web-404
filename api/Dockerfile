FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY src ./src
EXPOSE 3000
CMD [ "yarn", "run", "start" ]