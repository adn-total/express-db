var express = require('express');
var router = express.Router();
var mysql = require('mysql')

//connection a la db
var connection = mysql.createConnection({
    host :  'adnlogistique.com',
    user : 'rima1',
    password : 'rima!2017AD',
    database : 'corfortcar'
})

/*var connection = mysql.createPool({
    connectionLimit:100,
    user : 'root',
    password : '',
    database : 'projet'
})*/


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('accueil db');
});

/* GET users listing*/
router.get('/select-client', function(req, res, next) {   
    connection.connect();
    connection.query('SELECT * FROM patient', function (error, results, fields){
        if(error) throw error;
        res.send(results) 
    })
    //connection.end();
    
  //res.send('tous les clients');
});



module.exports = router;