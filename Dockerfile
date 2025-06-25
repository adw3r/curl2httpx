from node:slim
WORKDIR /app
COPY package-lock.json .
COPY package.json .
COPY server.js .

RUN npm install