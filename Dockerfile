FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY . .
RUN sed -i 's/listen 80;/listen ${PORT};/' /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["sh", "-c", "nginx -g 'daemon off;'"]