FROM node:18.19.0 AS build

WORKDIR /app

COPY package.json .

RUN npm install && npm install -g @angular/cli@19.1.0

COPY . .

RUN ng build --configuration production --verbose

FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/*/browser/. /usr/share/nginx/html/

RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
