module.exports = function mainController(app){
	app.get('/', function index(req,res){
		res.render('index');
	});
};