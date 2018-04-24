// File: /app.js

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();

app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use( express.static( path.join(__dirname, 'public') ) );
app.use( bodyParser.urlencoded({ extended: true }) );

app.get('/form', function(req, res) {
    res.render('form', { title: 'User-Login' });
});

app.use( '/api', require('./views/api/routes/index') );   

app.get('/enter', function(req, res) {

    var usr = req.query.usr;
    var pwd = req.query.pwd;

    if (usr === 'sam' && pwd === 'feye') {
        res.status(200).json({ enter: "Redirecting..."});
    } 
    else {
        res.json( { error: "Invalid username or password." });
    }
});

app.listen(3000, 'localhost');