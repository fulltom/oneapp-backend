module.exports = function mainController(app){
	app.get('/', function index(req,res){
		res.render('index', {title: 'Foo bar'});
	});
	 app.use(function(req, res) {
     	res.status(400);
     	res.render('404.jade', {title: '404: File Not Found'});
  });
};