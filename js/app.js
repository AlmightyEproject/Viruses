var app = angular.module('Virus', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
   .when('/Virus',{
     controller: 'Virus',
     templateUrl:'views/Content.html'
   })
    .when('/Virus/:id',{
     controller: 'Content',
     templateUrl:'views/Virus.html'
   })
   .otherwise({
     redirectTo:'/Virus'
   })
})