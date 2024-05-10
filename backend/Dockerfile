FROM node:20-slim

ARG _WORKDIR=/usr/src/app

WORKDIR ${_WORKDIR}

COPY . .

ENV PM2_DISABLE_TTY true

USER root

RUN apt-get update -y && apt-get install -y openssl

RUN npm install --quiet --no-optional --no-found --loglevel=error
RUN npm install pm2 -g
RUN npm run build

USER node

CMD ["pm2-runtime", "start", "processes.json", "--only", "guaradata-backend"]
