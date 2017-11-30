var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

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


router.use(express.json()); 

router.get('/', function (req, res) {
  res.send('Complete');
});

router.post('/send', function(req, res){
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


module.exports = router;

