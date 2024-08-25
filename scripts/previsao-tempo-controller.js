angular.module('app').controller('PrevisaoTempoController', function($scope, $resource) { // essa usa o $resource para conversar com os recursos rests.
    var WeatherChannel = $resource('http://api.openweathermap.org/data/2.5/weather?q=SaoPaulo,BR&units=metric')

    var getWeather = function () {
        WeatherChannel.get().$promise.then(function(response) { // método http get, $promise para aguardar a resposta do servidor(sucesso ou erro.), then(então) recebendo uma função que tratara a nossa resposta de sucesso.
            $scope.tempo = response
            console.log(response) // pra ver qual objeto é retornado, pois o controller não está declarado ao externo ou sej anão aparecerá na tela. só no console
        }, function(promise) {
            alert("Erro ao obter o clima!") // caso der erro
        })
    }
    
    getWeather()
})