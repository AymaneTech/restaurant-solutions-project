FROM node:18.13.0 as build

WORKDIR /app

COPY package.json ./
RUN npm install && npm install -g @angular/cli@19.1.0

COPY . .

RUN ng build

FROM nginx:latest

COPY --from=build app/dist/aftas-angular /usr/share/nginx/html

EXPOSE 80

