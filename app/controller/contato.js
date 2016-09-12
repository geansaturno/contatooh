module.exports = function() {

    var ID_CONTATO_INIC = 4;

    var controller = {};

    var contatos = [
        {_id: 1, nome: 'Contato Exemplo 1',
        email: 'cont1@empresa.com.br'},
        {_id: 2, nome: 'Contato Exemplo 2',
        email: 'cont2@empresa.com.br'},
        {_id: 4, nome: 'Contato Exemplo 2.5',
        email: 'cont2.5@empresa.com.br'},
        {_id: 3, nome: 'Contato Exemplo 3',
        email: 'cont3@empresa.com.br'}
    ];

    controller.listaContato = function(req, res){
        res.json(contatos);
    }

    controller.obtemContato = function(req, res){
        var id = req.params.id;

        var contato = contatos.filter(function(contato){
            return contato._id == id;
        })[0];

        contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
    }

    controller.deletaContato = function(req, res){
        var contatoId = req.params.id;

        contatos = contatos.filter(function(contato){
            return contato._id != contatoId;
        });

        res.status(204).end();
    }

    controller.salvaContato = function(req, res){

        var contato = req.body;

        contato._id ? atualiza(contato) : adiciona(contato);

    }

    function adiciona(novoContato) {
        console.log('criando contato');
        novoContato.id = ++ID_CONTATO_INIC;

        contatos.push(novoContato);

        return novoContato;
    }

    function atualiza(contatoAlterado) {
        console.log('Contato a ser alterado', contatoAlterado);
        console.log('Atualizando contato');
        contatos = contatos.map(function(contato){
            console.log(contato);
            if(contato._id == contatoAlterado._id){
                console.log('contato localizado');
                contato = contatoAlterado;
            }

            return contato;
        });

        console.log('Contatos após atualização', contatos);

        return contatoAlterado;
    }

    return controller;
}
