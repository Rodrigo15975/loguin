FROM node:20-alpine as developtment

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine as production

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY --from=developtment /app/dist ./dist

CMD ["npm","run", "start:prod"]
