FROM node:lts-alpine

WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm ci

COPY . .

# build
RUN npm run build

COPY . .

# run
CMD ["node", ".output/server/index.mjs"]