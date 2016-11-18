const express = require('express');
const app = express();
const pg = require('pg');

app.set('port', (process.env.PORT || 8080));

app.get('/', (req, res) => {
  res.end('Hello, World');
});

app.get('/db', (req, res) => {

  pg.connect(process.env.DATABASE_URL, (err, client, done) => {
    client.query('SELECT * FROM test_table', (err, result) => {
      done();
      if (err) {
        console.error(err);
        res.send(`Error: ${err}`);
      } else {
        res.send(result.rows);
      }
    });
  }); 

});



app.listen(app.get('port'), () => {
  console.log('app running');
});