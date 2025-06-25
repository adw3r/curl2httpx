FROM --platform=linux/arm64 node:24.3-alpine
WORKDIR /app
COPY package.json .
COPY server.js .
RUN npm install