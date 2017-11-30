var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var router = require('./routes/index');
var mail = require('./routes/mail');

app.use('/', router);
app.use('/mail', mail);

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(80, function(){
    console.log("Express server has started on port 3000")
});

app.use(express.static('public'));
