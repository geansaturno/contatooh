module.exports = function(app) {

    var controller = app.controller.contato;

    app.route('/contatos')
    .get(controller.listaContato);

    app.route('/contatos/:id')
    .get(controller.obtemContato)
    .delete(controller.deletaContato);
}
