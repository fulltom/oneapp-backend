'use strict';

var express = require('express'),
	//Colorize your string 
	colors = require('colors'),
	path = require('path'),
	bodyParser = require('body-parser'),
	http  = require('http'),
	app = express(),
	morgan = require('morgan'),
	server  = http.createServer(app),
	cookieSession = require('cookie-session')
;

app.set('port', process.env.PORT || 3000);
app.use(morgan('development' === app.get('env') ? 'dev' : 'default'));
app.set('view engine', 'jade');
// app.use(cookieSession({
// 	key : 'wazaaa',
// 	secret : 'node'
// }));

var publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

if('development' === app.get('env')){
	app.use(require('errorhandler')());
	app.locals.pretty = true;
}

app.use(function(req,res,next) {
	app.locals.url = req.url;
	next();
});

// require('./models/connection')(function(){
// 	console.log('Connection established to mongoDB');
// });

// require('./controllers/web-sockets')(server);
require('./controllers/main')(app);
// require('./controllers/users')(app);
// require('./controllers/entries')(app);
// require('./common/helpers')(app.locals);

server.listen(app.get('port'), function(){
	console.log('Your webapp is up on port '.green, app.get('port').toString().cyan);
});