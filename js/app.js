var app = angular.module('Virus', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
    .when('/History',{
     templateUrl:'views/history.html'
   })
   .when('/Origin',{  
    templateUrl:'views/origin.html'
  })
  .when('/Characteristics',{

    templateUrl:'views/characteristics.html'
  })
  .when('/Replication',{
    templateUrl:'views/replication.html'
  })
  .when('/Classify',{
    templateUrl:'views/classify.html'
  })
  .when('/Hawaii',{
    templateUrl:'views/test.html'
  })
  
   .otherwise({
     redirectTo:'/History'
   })
})