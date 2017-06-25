const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/app/:message', function (req, res) {
  res.send('Got a message: ' + req.params["message"]);
});

app.use(function(req, res) {
  res.status(404).send('Oh my! Did you type in the wrong page?');
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});