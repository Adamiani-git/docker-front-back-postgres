FROM node:16
WORKDIR /frontapp
COPY package.json .p
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]