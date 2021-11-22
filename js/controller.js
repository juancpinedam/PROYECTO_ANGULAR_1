var app = angular.module("PrimeraApp",[]);
app.controller("PrimerController", function($scope){
   
   
    $scope.nombre="JuanK";
    $scope.nuevoComentario = {};

    $scope.comentarios = [
        {comentario:"buen video", username:"juan"},
        {comentario:"buen video 2", username:"pedro"}
    ];

    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }

});