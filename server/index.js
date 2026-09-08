const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || '3000';
const env = process.env.NODE_ENV || 'development';
const router = require('./routes');

console.info(`🚀🚀 Server running on port ${port} and env is ${env} 🚀🚀`);

require('./database');

const app = express();

const distPath = path.join(__dirname, 'dist');

app.use(express.static(distPath));
app.use(express.json());
app.use(cookieParser());

app.use(router);

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, '../dist/index.html'));
});

app.listen(port);
