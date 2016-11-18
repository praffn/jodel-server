const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8080));

app.get('/', (req, res) => {
  res.end('Hello, World');
});

app.listen(app.get('port'), () => {
  console.log('app running');
});