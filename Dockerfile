FROM oven/bun:latest
RUN apt-get update && apt-get install -y \
    python3 \
    python3-distutils \
    python3-venv \
    build-essential \
    && ln -s /usr/bin/python3 /usr/bin/python
WORKDIR /app
COPY package.json .
COPY server.js .

RUN bun install