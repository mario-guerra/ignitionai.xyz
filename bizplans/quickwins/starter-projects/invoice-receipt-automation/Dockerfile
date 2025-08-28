FROM node:18-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=4004
EXPOSE 4004

CMD ["node", "index.js"]
