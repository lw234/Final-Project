var express = require('express'),
	mongoose = require('mongoose')
, http = require('http');

var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + "/public"));
});

mongoose.connect("mongodb://localhost/helloExpress");

var ComputerSchema = new mongoose.Schema({
	ScreenSize: String,
	HardDriveSize: String,
	MemorySize: String
}),

	Computers = mongoose.model('Computers', ComputerSchema);
// INDEX	
app.get("/computer", function (req, res) {
	Computers.find({}, function (err, docs) {
		res.render('computer/index', { computer: docs });
	});
});

//NEW
app.get('/computer/new', function (req, res) {
	res.render("computer/new");
});

//CREATE
app.post('/computer', function (req, res) {
	var b = req.body;
	new Computers({
		ScreenSize: b.ScreenSize,
		HardDriveSize: b.HardDriveSize,
		MemorySize: b.MemorySize
	}).save(function (err, user) {
		if (err) res.json(err);
		res.redirect('/computer/' + user._id);
	});
});

app.param('_id', function (req, res, next, _id) {
	Computers.find({ _id: _id }, function (err, docs) {
		req.user = docs[0];
		next();
	});
});

// SHOW
app.get('/computer/:_id', function (req, res) {
	res.render("computer/show", { user: req.user });
});

app.get('/', function(req, res){
        res.send('Hello World');
});

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});


























