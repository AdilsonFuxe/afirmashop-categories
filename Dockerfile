FROM node:16-alpine

EXPOSE ${PORT}

RUN mkdir -p /app
WORKDIR /app
COPY package.json ./
RUN yarn install --pure-lockfile --link-duplicates --non-interactive
COPY . ./
RUN yarn run build

CMD yarn start -- -p ${PORT}