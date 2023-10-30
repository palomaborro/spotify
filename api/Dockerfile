# Use an official Node.js runtime as the base image
FROM node:14
WORKDIR /api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm", "start"]
