var app = angular.module('Virus', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
   .when('/Virus',{
     controller: 'HomeController',
     templateUrl:'views/home.html'
   })
    .when('/Virus/:id',{
     controller: 'EmailController',
     templateUrl:'views/email.html'
   })
   .otherwise({
     redirectTo:'/Virus'
   })
})