var app = angular.module('Virus', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
  //  .when('/Virus',{
  //    controller: 'Virus',
  //    templateUrl:'views/Content.html'
  //  })
    .when('/Virus/',{
     controller: 'Content',
     templateUrl:'views/lsvr.html'
   })
   
   .otherwise({
     redirectTo:'/Virus/'
   })
})