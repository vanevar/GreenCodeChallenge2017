var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	data = {},
	router = express.Router(),
	path = require("path"),
	fs = require('fs');

app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});
