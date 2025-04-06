const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Tạo kết nối đến MySQL
const connection = mysql.createConnection({
    host: 'db',     
    user: 'myuser',
    password: 'mypassword',
    database: 'mydb'
  });

// Kiểm tra kết nối
connection.connect(err => {
  if (err) {
    console.error('❌ Kết nối MySQL thất bại:', err.message);
    return;
  }
  console.log('✅ Kết nối MySQL thành công!');
});

app.get('/', (req, res) => {
  res.send('Xin chào từ Node.js + MySQL!');
});

app.listen(port, () => {
  console.log(`App đang chạy tại http://localhost:${port}`);
});
