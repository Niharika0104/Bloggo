FROM node:latest

# Update package lists, install sudo, and clean up
RUN apt-get update && \
    apt-get install -y --no-install-recommends sudo && \
    rm -rf /var/lib/apt/lists/*
