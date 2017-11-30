
var express = require('express');
var app = express();

var nodemailer = require('nodemailer');

// Create a SMTP transporter object
    let smtpTransport = nodemailer.createTransport(
        {
            host: 'smtp.worksmobile.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'support@greenearthkorea.co.kr',
                pass: 'rmflsdjtm2@'
            }
        }
    );

app.use(express.json()); 

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/mail', function(req, res){
	var name = req.body["name"];
	var eamil = req.body["eamil"];
	var title = req.body["title"];
	var content = req.body["content"];


	var mailOptions = {  
    	from: name + ' <support@greenearthkorea.co.kr>',
    	to: 'support@greenearthkorea.co.kr',
    	subject: name,
    	html: content
	};

	smtpTransport.sendMail(mailOptions, function(error, response){

    if (error){
        console.log(error);
    } else {
        console.log("Message sent : " + response.message);
    }
    smtpTransport.close();
});

	res.send('Complete');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
