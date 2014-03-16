angular.module('rutasApp')
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider) {
	
	$stateProvider
		.state('entidades', {
			url: '/all',
			template: '<br><h2>Estas son las entidades que participan</h2><ul><li>Liceo Tame</li><li>Oriental Femenino</li><li>San Luis</li></ul>',
			controller: function($scope, $http){
				//$scope.on();
				$http({method: 'GET', url: 'http://127.0.0.1:8000/puntajes_malos'}).
				    success(function(data, status, headers, config) {
				      console.log("Datos devueltos: " + data);
				    }).
				    error(function(data, status, headers, config) {
				      // called asynchronously if an error occurs
				      // or server returns response with an error status.
				      console.log("No se pudo conectar a Django");
				    });
			}
		});



	$stateProvider
		.state('categorias', {
			url: '/all',
			template: '<br><h2>Estas son las categorias en las que participan los estudiantes</h2><ul><li>Matematicas</li><li>Español</li><li>Inges</li><li>Biologia</li><li>Sociales</li></ul>',
			controller: function($scope, $http){
				//$scope.on();
				$http({method: 'GET', url: 'http://127.0.0.1:8000/puntajes_malos'}).
				    success(function(data, status, headers, config) {
				      console.log("Datos devueltos: " + data);
				    }).
				    error(function(data, status, headers, config) {
				      // called asynchronously if an error occurs
				      // or server returns response with an error status.
				      console.log("No se pudo conectar a Django");
				    });
			}
		});

}])