FROM node:latest



COPY . .
# Clear npm cache to avoid issues like "idealTree" error
RUN if [ -d "node_modules" ]; then rm -rf node_modules; fi && \
    npm cache clean --force

# Install dependencies

RUN npm install 


RUN npx prisma generate
EXPOSE 3000

CMD ["npm", "run", "dev"]
