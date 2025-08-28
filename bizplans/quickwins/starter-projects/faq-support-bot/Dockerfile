FROM node:18-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=4002
EXPOSE 4002

CMD ["node", "index.js"]
