
// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5213;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:5213/api)
router.get('/', function (req, res) {
    res.json({ message: 'touggourti' });
});
router.get('/activite', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json({
        "1": {
            nom: 'Optim IT', acti: "Bureau d'études informatique", tel: "0540437705", categorie: "Informatique",
            keywords: "boite de développement,logiciels,sites web, infographie"
        },
        "2": {
            nom: 'Pharmacie Bassa', acti: "Pharmacie", tel: "029671312", categorie: "Medical",
            keywords: "médicaments,pharmacie"
        },
        "3": {
            nom: 'Moussaoui Informatique', acti: "Vente et maintenance matériel informatique", tel: "029667080", categorie: "Informatique",
            keywords: "desktop,laptop,matériel,informatique,code a barre,maintenance"
        }
    });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server started @ ' + port);