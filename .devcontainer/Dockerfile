FROM node:latest

# Set working directory


# Ensure permissions are correct for the working directory
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

# Switch to non-root user if necessary (if you're running as non-root)
USER node

# Copy package.json and package-lock.json files
COPY package*.json .

# Remove node_modules if it exists, then clean npm cache
RUN if [ -d "node_modules" ]; then rm -rf node_modules; fi && \
    npm cache clean --force

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all other source files
COPY . .

# Generate Prisma client (if applicable)
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]
