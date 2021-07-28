FROM node:14-slim

WORKDIR /opt/app

COPY package*.json ./
RUN npm ci --only=production

COPY *.js .

EXPOSE 8080
CMD ["node", "index.js"]