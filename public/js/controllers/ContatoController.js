angular.module('contatooh').controller('ContatoController',
function($scope, $routeParams, $resource) {

    $scope.msg = {
        texto: ''
    };

    var Contatos = $resource('/contatos/:id');

    if($routeParams.contatoId){
        Contatos.get({id: $routeParams.contatoId},
            function(contato){
                $scope.contato = contato;
            },
            function(erro){
                console.log(erro);
                $scope.msg.texto = 'Nenhum contato foi encontrado';
            }
        );
    } else {
        $scope.contato = new Contatos();
    }

    $scope.salvar = function(){
        $scope.contato.$save()
        .then(function(result){
            console.log(result);
            $scope.msg.texto = 'Salvo com sucesso';
            $scope.contato = new Contato();
        })
        .catch(function(erro){
            console.log(erro);
            $scope.msg.texto = 'Não foi possível salvar';
        })
    }
});
