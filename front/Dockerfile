FROM node:17 AS builder
WORKDIR /frontapp
COPY package.json .
COPY . .
RUN yarn
RUN yarn build

FROM nginx:stable-alpine
COPY --from=builder /frontapp/build /usr/share/nginx/html
COPY --from=builder /frontapp/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]