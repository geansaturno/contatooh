var http = require('http');
var app = require('./config/express.js')();
require('./config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function(){
    console.log('Servidor iniciado em http://localhost:' + app.get('port'));
})
