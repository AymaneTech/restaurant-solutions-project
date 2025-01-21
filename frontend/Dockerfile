FROM node:18.19.0 AS build

WORKDIR /app

COPY package.json ./
RUN npm install && npm install -g @angular/cli@19.1.0

COPY . .

RUN ng build --configuration production

FROM nginx:latest

COPY --from=build /app/dist/*/. /usr/share/nginx/html/

EXPOSE 80

