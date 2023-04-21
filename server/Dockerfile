FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# Start the Node.js application
CMD ["npm", "run","start"]
