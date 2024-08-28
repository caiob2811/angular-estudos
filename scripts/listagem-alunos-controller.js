angular.module('app').controller('ListagemAlunosController', function ($scope, $filter, AlunosCollectionService) { //scope é elemento de ligação entre a tela e o controller, nele faz referências as variáveis e controller.
    $scope.nome = 'Cb'
    var nome = 'Oi, Olá, Hi'

    $scope.iniciado = true // elemento de ligação entre o controle e a view.
    $scope.cadastrar = false

    $scope.alunos = AlunosCollectionService.getAlunos();

    $scope.hoje = new Date();

    $scope.finalizar = function() {
        $scope.iniciado = false
    }

    $scope.iniciar = function() {
        $scope.iniciado = true
    }

    $scope.ordenarPorNome = function() {
        AlunosCollectionService.ordenarPorNome();
        $scope.alunos = AlunosCollectionService.getAlunos();
    }

    $scope.ordenarPorIdade = function() {
        AlunosCollectionService.ordenarPorIdade();
        $scope.alunos = AlunosCollectionService.getAlunos();
    }

    $scope.exibeCadastro = function () {
        $scope.cadastrar = !$scope.cadastrar
    }
})