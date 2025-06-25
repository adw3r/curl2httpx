FROM node:24.3
WORKDIR /app
COPY package.json .
COPY server.js .
RUN npm install node-linux-arm64
RUN npm install