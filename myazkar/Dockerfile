# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Ionic CLI globally
RUN npm install -g @ionic/cli

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
# RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on (assuming default Ionic port)
EXPOSE 8100

# Command to run your Ionic app
CMD ["ionic", "serve", "--port=8100", "--host=0.0.0.0"]
