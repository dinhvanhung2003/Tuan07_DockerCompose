# Stage 1: Build React app
FROM node:18 AS build
WORKDIR /app
COPY my-app ./
RUN npm install
RUN npm run build

# Stage 2: Serve build bằng Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
