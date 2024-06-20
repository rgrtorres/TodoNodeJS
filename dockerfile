# Use an official MongoDB image as the base image
FROM mongo:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the local MongoDB configuration file to the container
COPY mongod.conf /etc/mongod.conf

# Expose the default MongoDB port
EXPOSE 27017

# Set the entry point for the container
CMD ["mongod", "--config", "/etc/mongod.conf"]