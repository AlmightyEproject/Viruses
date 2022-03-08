var app = angular.module('Virus', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
  //  .when('/Virus',{
  //    controller: 'Virus',
  //    templateUrl:'views/Content.html'
  //  })
    .when('/History',{
     controller: 'Content',
     templateUrl:'views/history.html'
   })
   .when('/Origin',{
    controller: 'Content',
    templateUrl:'views/origin.html'
  })
  .when('/Characteristics',{
    controller: 'Content',
    templateUrl:'views/characteristics.html'
  })
  .when('/Replication',{
    controller: 'Content',
    templateUrl:'views/replication.html'
  })
  .when('/Classify',{
    controller: 'Content',
    templateUrl:'views/classify.html'
  })
 
   .otherwise({
     redirectTo:'/History'
   })
})