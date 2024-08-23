angular.module('app').controller('PrimeiroController', function ($scope) { //scope é elemento de ligação entre a tela e o controller, nele faz referências as variáveis e controller.
    $scope.nome = 'Cb';
    var nome = 'Oi, Olá, Hi'

    $scope.iniciado = true // elemento de ligação entre o controle e a view.

    $scope.alunos = ['Aluno 1','Aluno 2', 'Aluno 3', 'Aluno 4'];

    $scope.finalizar = function() {
        $scope.iniciado = false
    }

    $scope.iniciar = function() {
        $scope.iniciado = true
    }

    $scope.submeter = function () {
        if($scope.form_1.$valid) { // se o formm_1 for valido, adiciona o nome no array alunos.
            $scope.alunos.push($scope.nome_aluno)
        } else {
            alert('Preencha o campo corretamente!')
        }
    }
});