const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Xin chào từ Node.js + Docker Compose!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
