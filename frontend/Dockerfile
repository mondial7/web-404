FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY src ./src
COPY public ./public
COPY .env ./
COPY index.html ./
COPY tsconfig*.json ./
COPY vite.config.js ./
RUN npm run build
RUN yarn global add serve
EXPOSE 5000
CMD [ "serve", "-s", "build" ]