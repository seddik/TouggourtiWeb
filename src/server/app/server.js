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

var User = sequelize.define('activite', {
    nom: { type: Sequelize.STRING, },
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
});
 

var express = require('express');
var restapi = express();

restapi.get('/api', function (req, res) {
    res.json({ "message": "touggourti" });

});

restapi.get('/api/activite', function (req, res) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    db.all("SELECT * FROM activite", function (err, row) {
        if (err) {
            res.json({ "error": err });
        }
        else {
            res.json(row);
        }
    });

});
 
restapi.listen(5213);

console.log("Submit GET or POST to http://localhost:5213/api");