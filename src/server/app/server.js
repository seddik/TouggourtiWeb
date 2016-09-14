var Sequelize = require('sequelize')
var sqlite3 = require('sqlite3').verbose();
var path = require('path');
var dbPath = path.resolve(__dirname, 'touggourti.db')
var sequelize = new Sequelize('', '', '', { dialect: 'sqlite', storage: dbPath });
var db = new sqlite3.Database(dbPath);

db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS [activite] (\
[id] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,\
[nom] TEXT  UNIQUE NOT NULL,\
[ar_nom] TEXT  UNIQUE NOT NULL,\
[domaine] NVARCHAR(50)  NULL,\
[tel] NVARCHAR(50)  NULL,\
[mobile] NVARCHAR(50)  NULL,\
[categorie] NVARCHAR(50) DEFAULT 'All' NULL,\
[keywords] TEXT  NULL,\
[gps] NVARCHAR(50)  NULL,\
[logo] TEXT  NULL,\
[adresse] TEXT  NULL,\
[email] NVARCHAR(50)  NULL,\
[website] NVARCHAR(50)  NULL,\
[fax] NVARCHAR(50)  NULL,\
[description] TEXT  NULL\
)");

});


var express = require('express');
var restapi = express();

restapi.get('/api', function (req, res) {
    res.json({ "message": "hello" });

});

restapi.get('/api/activite', function (req, res) {


    db.all("SELECT * FROM activite", function (err, row) {
        if (err) {
            res.json({ "nom": err });
        }
        else {
            res.json({ "nom": JSON.stringify(row) });
        }
    });

});

restapi.post('/api', function (req, res) {
    db.run("UPDATE counts SET value = value + 1 WHERE key = ?", "counter", function (err, row) {
        if (err) {
            console.err(err);
            res.status(500);
        }
        else {
            res.status(202);
        }
        res.end();
    });
});


restapi.listen(5213);

console.log("Submit GET or POST to http://localhost:5213/api");