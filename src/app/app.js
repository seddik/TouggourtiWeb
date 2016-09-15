var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var http = require('http');

var app = express();
var server = http.createServer(app);
 

app.use(express.static(path.resolve(__dirname, 'www')));

app.engine('.html', exphbs({ extname: '.html', defaultLayout: path.resolve(__dirname, 'views/layouts') + '/layout' }));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', '.html');

app.get('/', function (req, res) {
    res.render('home', { host:JSON.stringify( server.address()) });
});

server.listen(3333);
console.log('Express server started on port %s', server.address().port);
