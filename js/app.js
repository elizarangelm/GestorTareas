var app = angular.module('myPracticeApp', ["ngRoute"]);

app.controller('myTareasController', ['$scope', function ($scope) {
    $scope.tareas = [
        { descripcion: "estudiar", usuario: "elizabeth" },
        { descripcion: "hacer codigo", usuario: "elizabeth" },
        { descripcion: "presentar codigo", usuario: "elizabeth" },
        { descripcion: "feedback", usuario: "claudia" },
        { descripcion: "rehacer codigo", usuario: "elizabeth" }
    ]
}]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/listaTareas.html",
            controller: "myTareasController"
        })
});

app.directive('tbListadoTareas', function () {
    return {
        restrict: "E",
        templateUrl: "views/listadoTareas.html",
        controller: "myTareasController"
    }
});