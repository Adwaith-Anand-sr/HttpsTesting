const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require("path");

const app = express();

app.get('/', (req, res) => {
   console.log("router get started..")
  res.send('Hello from HTTPS server!');
});

const server = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
}, app);

const PORT = 443;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
