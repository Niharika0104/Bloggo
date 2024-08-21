FROM node:latest

# No need for sudo since the container runs as root by default
RUN apt-get update && \
    apt-get install -y --no-install-recommends <your-packages> && \
    rm -rf /var/lib/apt/lists/*
