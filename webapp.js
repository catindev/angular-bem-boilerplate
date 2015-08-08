var fs = require("fs"),
		compress = require('compression'),
		express = require('express'),
		app = express();

app.use(compress({ threshold: 0 }));
app.use('/assets', express.static('assets', { maxAge: 86400 }));

var frontendRoutes = [ '/' ];

frontendRoutes.forEach(function(route) {
	app.get(route,function (request,response) {
		var fileStream = fs.createReadStream(__dirname + '/index.html');
		fileStream.on('data', function (data) { response.write(data); });
		fileStream.on('end', function() { response.end(); });
	});
});

app.listen(3000);
console.info('App server at', 3000);
