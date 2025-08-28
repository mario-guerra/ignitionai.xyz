FROM node:18-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=4001
EXPOSE 4001

CMD ["node", "index.js"]
