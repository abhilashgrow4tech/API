var express = require('express');
var bodyParser = require('body-parser');
var app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

router.post('/', function(req, res) {
    console.log(req.body);
    res.send('Message received');
});



app.use('/', router);

app.listen(port);
console.log('API is running on port ' + port);


