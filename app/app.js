var sap = angular.module('sapApp', ['ngRoute', 'ui.bootstrap', 'sapApp.controllers']);

sap.config(['$routeProvider', '$controllerProvider', function($routeProvider, $controllerProvider){

    'use strict';

    //Necessário para carregar dinamicamente os controllers dentro de cada view
    sap.registerCtrl = $controllerProvider.register;

    $routeProvider.when("/", {templateUrl: "views/main.html", controller: "loginCtrl"});
    $routeProvider.when("/login", {templateUrl: "views/login.html"});
    $routeProvider.when("/customer", {templateUrl: "views/customer.html"});

    $routeProvider.otherwise({redirectTo: "/"});

}]);

sap.controller('SapController', function($scope, $location) {

    $scope.logIn = function() {
        $location.path("/login");

        console.log("Login..");

    }

});