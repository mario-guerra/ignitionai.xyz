FROM node:18-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=4006
EXPOSE 4006

CMD ["node", "index.js"]
