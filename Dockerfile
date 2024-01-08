# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /ayana-nextjs

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port on which the app will run
EXPOSE 9000

# Start the Next.js app in production mode
CMD ["npm", "start"]
