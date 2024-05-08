# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --ignore-scripts

# Copy the rest of the application code
COPY . .

# Expose any necessary ports
# EXPOSE <port>

# Command to run your application
CMD ["npm", "start"]
