var mongoose = require('mongosse');

module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            require: true,
            index: {
                unique: true
            }
        }
    });

    return mongoose.model('Contato', schema);
};
