# Dùng image chính thức của Node.js
FROM node:18

# Tạo thư mục làm việc
WORKDIR /app

# Copy file vào container
COPY package*.json ./
RUN npm install
COPY . .

# Chạy app trên port 3000
EXPOSE 3000
CMD ["npm", "start"]
