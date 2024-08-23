angular.module('app').controller('PrimeiroController', function ($scope) { //scope é elemento de ligação entre a tela e o controller, nele faz referências as variáveis e controller.
    $scope.nome = 'Cb';
    var nome = 'Oi, Olá, Hi'

    $scope.iniciado = true // elemento de ligação entre o controle e a view.

    $scope.alunos = [{'nome': 'Joãozinho', 'idade': 9},
        {'nome': 'Ricardinho', 'idade': 11},
        {'nome': 'Felipinho', 'idade': 11},
        {'nome': 'Zildinha', 'idade': 14},
        {'nome': 'Marianinha', 'idade': 10},
        {'nome': 'Luluzinha', 'idade': 12}];


    $scope.hoje = new Date();

    $scope.finalizar = function() {
        $scope.iniciado = false
    }

    $scope.iniciar = function() {
        $scope.iniciado = true
    }

    $scope.ordenarPorNome = function() {
        $scope.ordenadoPorNome = !$scope.ordenadoPorNome
        $scope.alunos = $filter('orderBy')($scope.alunos, 'nome', $scope.ordenardoPorNome)
    }

    $scope.ordenarPorIdade = function() {
        $scope.ordenadoPorIdade = !$scope.ordenadoPorIdade
        $scope.alunos = $filter('orderBy')($scope.alunos, 'idade', $scope.ordenadoPorIdade)
    }

    $scope.submeter = function() {
        if($scope.novo_aluno_form.$valid) {
            novo_aluno = {};
            novo_aluno['nome'] = $scope.nome_aluno;
            novo_aluno['idade'] = parseInt($scope.idade_aluno);
            $scope.alunos.push(novo_aluno);
        } else {
            alert("Preencha o formulário corretamente");
        }
    }
})