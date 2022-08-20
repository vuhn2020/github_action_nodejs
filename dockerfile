#builder first
FROM node:16-alpine
# Create app directory
WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

# Generate prisma client
RUN npx prisma generate

# Migrate deploy
# RUN npx prisma migrate deploy

# Bundle app source
COPY . .
EXPOSE 5000

# Start server
CMD ["startup.sh"]