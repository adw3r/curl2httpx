FROM oven/bun:latest

WORKDIR /app
COPY package.json .
COPY server.js .

RUN bun install