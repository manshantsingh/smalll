var express = require('express');
var bodyParser=require('body-parser');
var mysql = require('mysql');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/ytd', function(req, res){
	var url = req.query.url;
	if(url){
		var arr = url.split("/");
		var id = arr[arr.length-1];
		console.log("first split arr:", arr,"\nid:", id);
		arr = url.split("=");
		id = arr[arr.length-1];
		console.log("first second arr:", arr,"\nid:", id);
		res.redirect("http://k.manshantsingh.com:9827/"+id);
	}
	else{
		res.send("missing param 'url'");
	}
});

app.get('/:tiny', function(req, res){
	connection.query('select geturl(?) as complete;',req.params.tiny, function(err, rows) {
		if(err || !rows[0].complete) res.send("not-found");
		else res.redirect(rows[0].complete);
	});
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.post('/addurl', function(req, res){
	var tiny = req.body.tiny;
	var complete = req.body.complete;

	if(tiny && complete){
		connection.query('call addurl(?, ?);',[tiny, complete], function(err, rows, fields) {
			if(err) res.send('Something went wrong.\nMost likely tiny.ms/'+tiny+' is already taken.');
			else res.send('URL shortcut added.\ntiny.ms/'+tiny+' should redirect you to '+complete);
		});
	}
});

// For backup from other server only. Should barely get here
app.post('/isms', function(req, res) {
	// Add an sms parser here for yourself :)
	console.log('req: ', req);
	res.send('SMS recieved');
});

var connection = mysql.createConnection({
	host		: process.env.DB_host,
	user		: process.env.DB_user,
	password	: process.env.DB_pass,
	database	: process.env.DB_name
});

connection.connect(function(err){
	if(err) throw err;
	console.log("Connected");
});

const port = 1337;
app.listen(port, '127.0.0.1', function(){
	console.log('server listeneing on port ' + port);
});

// connection.end();
