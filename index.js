const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('generic', {title: "Home Page", message: "Hello World"});
});

app.get('/about', function(req, res) {
  res.render('generic', {title: "About", message: "This is the about page"});
})

app.listen(3000, function() {
  console.log("listening on port 3000");
});
