const express = require('express');
const app = express();
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/services', function(req, res) {
    res.render('pages/services');
  });

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');