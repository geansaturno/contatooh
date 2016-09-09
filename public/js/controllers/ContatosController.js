angular.module('contatooh').controller('ContatosController',
function($scope, $resource){

    $scope.filtro = '';

    $scope.contatos = [];

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
            }
        )
    }
    
    buscaContatos();
});
