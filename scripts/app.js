var app = angular.module('app', ['ngResource', 'ui.router']) // agora qualquer controle dessa aplicação pode utilizar o ngResource como uma dependência interna dessa aplicação.
    .config(function($stateProvider) {
        $stateProvider
        .state('aplicação_inicial', { // é um elemento do ui-router que prover os estados para a aplicação é aqui que definimos os estados da aplicação.
            name: 'aplicação_inicial', // nome do estado
            url: '/inicial.html',
            templateUrl: 'views/inicial.html' // vamos dizer ao angular aonde ele deve buscar o template html ou seja o trecho html desse estado.
        }).state('aplicacao_listagem' ,{
            name: 'aplicacao_listagem',
            url: '/listagem.html',
            templateUrl: 'views/listagem-alunos.html'
        }).state('aplicacao_cadastro' ,{
            name: 'aplicacao_cadastro',
            url: '/cadastro.html',
            templateUrl:'views/nova-inscricao.html'
        }).state('aplicacao_previsao' ,{
            name:'aplicacao_previsao',
            url: '/previsao.html',
            templateUrl: 'views/previsao-do-tempo.html'
        })
    })

    app.run(function($rootScope, $state) { // é a função chamada quando o angular inicia um aplicação.
        $state.go('aplicação_inicial') //estado vai para...
        $rootScope.mensagem = "Olá, seja bem vindo!"
    })