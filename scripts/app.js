angular.module('rutasApp', [
	'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('Entidades', {
			url: '/enti',
			template: '<h2>Hola aqui estan las entidades</h2><a ui-sref="entidades">Ir a las entidades</a><div ui-view></div>'
		})
		.state('Categorias', {
			url: '/cate',
			template: '<h2>Aqui estan las categorias</h2><a ui-sref="categorias">Ir a las categorias</a><div ui-view></div>'
		});

}])