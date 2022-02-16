FROM node:16.14.0-alpine
WORKDIR /backapp
COPY package.json .
COPY . .
RUN yarn
EXPOSE 5000
CMD ["node", "index.js"]