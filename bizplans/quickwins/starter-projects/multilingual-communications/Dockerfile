FROM node:18-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=4003
EXPOSE 4003

CMD ["node", "index.js"]
