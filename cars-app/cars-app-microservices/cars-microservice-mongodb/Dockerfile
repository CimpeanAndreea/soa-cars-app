# Specify node version and choose image
FROM node:latest as build

# Set working directory in the container
WORKDIR /app-microserv-2

# Copy package.json and package-lock.json from host to container
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ../cars-microservice-mongodb/package*.json .
COPY ../cars-microservice-mongodb/tsconfig.build.json .
COPY ../cars-microservice-mongodb/tsconfig.json .

# Install app dependencies
RUN npx npm install

# Bundle app source / copy the rest of the application code to the working directory
COPY ../cars-microservice-mongodb/ .

# Build the app to the /dist folder
RUN npx npm run build

# Build another image
FROM node:latest

# Set Working Directory
WORKDIR /app-microserv-2
COPY ../cars-microservice-mongodb/package.json .
RUN npx npm install --only=production

# Copy all from build
COPY --from=build /app-microserv-2/dist ./dist
EXPOSE 8081

# Run app
CMD npx npm run start:prod




