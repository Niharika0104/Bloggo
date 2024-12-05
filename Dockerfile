FROM node:latest

# Install sudo
RUN apt-get update && apt-get install -y sudo
