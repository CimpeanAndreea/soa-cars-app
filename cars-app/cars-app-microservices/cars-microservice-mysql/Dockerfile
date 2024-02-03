# Specify node version and choose image
FROM node:latest as build

# Set the working directory in the container
WORKDIR /app-microserv-1

# Copy package.json and package-lock.json from host to container
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ../cars-microservice-mysql/package*.json .
COPY ../cars-microservice-mysql/tsconfig.build.json .
COPY ../cars-microservice-mysql/tsconfig.json .

# Install app dependencies
RUN npx npm install

# Bundle app source / copy the rest of the application code to the working directory
COPY ../cars-microservice-mysql/ .

# Build the app to the /dist folder
RUN npx npm run build

# Build another image
FROM node:latest

# Set Working Directory
WORKDIR /app-microserv-1
COPY ../cars-microservice-mysql/package.json .
RUN npx npm install --only=production

# Copy all from build
COPY --from=build /app-microserv-1/dist ./dist
EXPOSE 8080

# Run app
CMD npx npm run start:prod