var mongoose = require('mongoose');

module.exports = function(uri) {
    mongoose.connect(uri);
    mongoose.set('debug', true);

    mongoose.connection.on('connected', function(){
        console.log("Mongoose conectado em " + uri);
    });

    mongoose.connection.on('disconnected', function(){
        console.log("Mongoose desconectado de " + uri);
    });

    mongoose.connection.on('error', function(erro){
        console.log("Mongoose! Erro de conexão: ", erro);
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log("Mongose, coneção finalizada");

            process.exit(0);
        });
    });
}
