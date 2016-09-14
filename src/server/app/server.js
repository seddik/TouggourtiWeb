var Sequelize = require('sequelize')
var sqlite3 = require('sqlite3').verbose();
var path = require('path');
var dbPath = path.resolve(__dirname, 'touggourti.db')
var sequelize = new Sequelize('', '', '', { dialect: 'sqlite', storage: dbPath });
var db = new sqlite3.Database(dbPath);

//db.serialize(function () {
//    db.run("CREATE TABLE IF NOT EXISTS [activite] (\
//[id] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,\
//[nom] TEXT  UNIQUE NOT NULL,\
//[ar_nom] TEXT  UNIQUE NOT NULL,\
//[] NVARCHAR(50)  NULL,\
//[] NVARCHAR(50)  NULL,\
//[] NVARCHAR(50)  NULL,\
//[] NVARCHAR(50) DEFAULT 'All' NULL,\
//[] TEXT  NULL,\
//[] NVARCHAR(50)  NULL,\
//[] TEXT  NULL,\
//[] TEXT  NULL,\
//[] NVARCHAR(50)  NULL,\
//[] NVARCHAR(50)  NULL,\
//[] NVARCHAR(50)  NULL,\
//[] TEXT  NULL\
//)");

//});

var ActiviteDB = sequelize.define('activite', {
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
}, {
    freezeTableName: true
}).sync();
 
//var addHeaders = function () {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//    res.header('Access-Control-Allow-Headers', 'Content-Type');
//};
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', function (req, res) {
    
    res.json({ "message": "touggourti" });

});

app.get('/api/activite', function (req, res) {


    db.all("SELECT * FROM activite", function (err, row) {
        if (err) {
            res.json({ "error": err });
        }
        else {
            res.json(row);
        }
    });

});

app.get('/api/activite/:id', function (req, res) {

    db.get("SELECT * FROM activite where id= ? ", req.params.id, function (err, row) {
        if (err) {
            res.json({ "error": err });
        }
        else {
            res.json(row);
        }
    });
});
app.post('/api/activite', function (req, res) {
    
    ActiviteDB.create({
        nom:   req.body.nom, 
        nom_ar:   req.body.nom_ar ,
        domaine:   req.body.domaine ,
        tel:   req.body.tel ,
        mobile:   req.body.mobile ,
        categorie:   req.body.categorie ,
        keywords:   req.body.keywords ,
        gps:   req.body.gps ,
        logo:   req.body.logo ,
        adresse:   req.body.adresse ,
        email:   req.body.email ,
        fax:   req.body.fax ,
        website:   req.body.website ,
        description: req.body.description
    });
    
    res.json("OK");
});
 
app.listen(5213);

console.log("Submit GET or POST to http://localhost:5213/api");

var print = function (o) {
    var str = '';

    for (var p in o) {
        if (typeof o[p] == 'string') {
            str += p + ': ' + o[p] + '; </br>';
        } else {
            str += p + ': { </br>' + print(o[p]) + '}';
        }
    }

    return str;
}