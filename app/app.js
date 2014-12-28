/**
 * Created by rafa on 12/27/14.
 */

//angular: AngularJS
//hello: application name
//[]: dependecies
//app: angular module (name of this file?)

var app = angular.module("hello",[]);

//helloController: ccontroller name

app.controller('helloController', ['$scope', function($scope) {
    $scope.sayHello = 'helloController says... Hello World!';
}]);
