FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

ENV NPM_CONFIG_NETWORK_TIMEOUT=600000
RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD ["npm", "run", "start"]