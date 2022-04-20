FROM nginx:latest

COPY ./dist/ /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
