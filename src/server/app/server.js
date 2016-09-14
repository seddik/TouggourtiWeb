var Sequelize = require('sequelize'),
    epilogue = require('epilogue'),
    http = require('http');

var path = require('path');
var dbPath = path.resolve(__dirname, 'touggourti.db')

// Define your models
var database = new Sequelize('database', 'root', 'password', { dialect: 'sqlite', storage: dbPath });
 

var Activite = database.define('Activite', {
    nom: { type: Sequelize.STRING },
    nom_ar: { type: Sequelize.STRING },
    domaine: { type: Sequelize.STRING },
    tel: { type: Sequelize.STRING },
    mobile: { type: Sequelize.STRING },
    categorie: { type: Sequelize.STRING },
    keywords: { type: Sequelize.STRING },
    gps: { type: Sequelize.STRING },
    logo: { type: Sequelize.STRING },
    adresse: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    fax: { type: Sequelize.STRING },
    website: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
});

// Initialize server


var express = require('express'),
    bodyParser = require('body-parser');

var app = express();
app.set('port', process.env.PORT || 5213);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var server = http.createServer(app).listen(app.get('port'),
  function () {
      console.log("Express server listening on port " + app.get('port'));
  });


// Initialize epilogue
epilogue.initialize({
    app: app,
    sequelize: database
});

// Create REST resource
var userResource = epilogue.resource({
    model: Activite,
    endpoints: ['/api/activite', '/api/activite/:id']
});

// Create database and listen
database
  .sync()
  .then(function () {
      server.listen(function () {
          var host = server.address().address,
              port = server.address().port;

          console.log('listening to port %s', host, port);
      });
  });





 
