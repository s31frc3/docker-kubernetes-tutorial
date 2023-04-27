# Specify a base image
FROM node:alpine

#Install some dependencies
# где находится сам проект в контейнере
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Set up a default command
CMD [ "npm","start" ]