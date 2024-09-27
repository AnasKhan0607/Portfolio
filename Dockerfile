# Stage 1: Build the application
FROM node:18 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the application
FROM node:18 AS runner

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Set environment variable to tell Next.js it's in production mode
ENV NODE_ENV production

# Expose the port on which the Next.js app runs (default: 3000)
EXPOSE 3000

# Run Next.js server
CMD ["npm", "run", "start"]
