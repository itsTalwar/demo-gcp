FROM node:12.6.0-alpine
EXPOSE 8080
COPY server.js .
CMD docker-compose -f docker-compose.yml -f docker-compose.prod.yml up