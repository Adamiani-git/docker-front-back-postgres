FROM node:16
WORKDIR /backapp
COPY package.json .
COPY . .
RUN yarn install
EXPOSE 5000
CMD ["node", "index.js"]