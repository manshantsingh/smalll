var express = require('express');
var bodyParser=require('body-parser');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/:tiny', function(req, res){
	request = new Request('select dbo.geturl(@tiny)', function(err, rowCount){
		if(err) {
			console.log(err);
		}
	});
	request.addParameter('tiny', TYPES.NVarChar, req.params.tiny);

	request.on('row', function(columns){
		if(columns[0].value){
			res.redirect(columns[0].value);
		}
		else res.send("its null");
	});
	connection.execSql(request);
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.post('/addurl', function(req, res){
	var tiny = req.body.tiny;
	var complete = req.body.complete;
	if(tiny && complete){
		request = new Request('addurl', function(err, rowCount){
			if(err) {
				console.log(err);
				res.send('Something went wrong.\nMost likely smalll.xyz/'+tiny+' is already taken.');
			}
			else{
				res.send('URL shortcut added.\nsmalll.xyz/'+tiny+' should redirect you to '+complete);
			}
		});
		request.addParameter('tiny', TYPES.NVarChar, tiny);
		request.addParameter('complete', TYPES.NVarChar, complete);
		connection.callProcedure(request);
	}
});


var config = {
    userName: process.env.DB_user,
    password: process.env.DB_pass,
    server: process.env.DB_url,
    // If you are on Microsoft Azure, you need this:
    options: {
    	encrypt: true,
    	// rowCollectionOnRequestCompletion: true,
    	database: 'smalll'
    }
};
var connection = new Connection(config);
connection.on('connect', function(err) {
	if(err){
		console.log(err);
	}
    console.log("Connected");
});

const port = 1337;
app.listen(port, function(){
	console.log('server listeneing on port ' + port);
});