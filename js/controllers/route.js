
var route = angular.module('myRoute',['ngRoute']);
route.config(moduleRoutes);
	function moduleRoutes ($routeProvider,$locationProvider){
	    $routeProvider
	    .when('/next',{
	        templateUrl : '../view/page-two.html',
	        controller : 'otherController'
	        
	    })
	    .otherwise({redirectTo:'/'});

	   
	}
