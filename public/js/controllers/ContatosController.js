angular.module('contatooh').controller('ContatosController',
function($scope, $resource){

    $scope.filtro = '';

    $scope.contatos = [];

    $scope.msg = {
        texto : ''
    };

    console.log($scope.contatos);
    var Contato = $resource('/contatos/:id');

    function buscaContatos(){
        var promise = Contato.query(
            function(data){
                $scope.contatos = data;
            },
            function(erro){
                console.log("Erro ao pegar contatos");
                console.log(erro);
                $scope.msg.text = 'Erro ao pegar contatos';
            }
        )
    }

    buscaContatos();

    $scope.remove = function(contatoId){
        Contato.delete({id: contatoId}, buscaContatos, function(erro){
            console.log('Não foi possivel excluir o elemento');
            console.log(erro);
            $scope.msg.text = 'Não foi possível excluir o elemento';
        })
    }
});
