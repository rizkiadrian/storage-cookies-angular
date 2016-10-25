var moduleController = angular.module('otherModule',['ngCookies','myRoute','ngRoute']);
moduleController.controller('otherController',otherController);

function otherController($scope,$cookies){
$scope.token = $cookies.get('token');
$scope.removecookies = function (){
	$cookies.remove ('token');
	$scope.token = 'deleted';
};
}