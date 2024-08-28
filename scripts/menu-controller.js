angular.module('app').controller('MenuController', function($scope, $state) { // $state permite que ele seja acessível numa view e transite entre estados
   
    $scope.irInicio = function() {
        $state.go('aplicação_inicial')
    }

    $scope.irListagem = function() {
        $state.go('aplicacao_listagem')
    }

    $scope.irCadastro = function() {
        $state.go('aplicacao_cadastro')
    }

    $scope.irPrevisao = function() {
        $state.go('aplicacao_previsao')
    }
})