FROM node:18-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=4005
EXPOSE 4005

CMD ["node", "index.js"]
