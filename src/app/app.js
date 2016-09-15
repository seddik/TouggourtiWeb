var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, 'www')));

app.engine('.html', exphbs({ extname: '.html', defaultLayout: path.resolve(__dirname, 'views/layouts') + '/layout' }));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', '.html');

app.get('/', function (req, res) {
    res.render('home', { nom: 'seddik' });
});

app.listen(3333, function () { 
    console.log('Touggourti app listening on port 3333');
});