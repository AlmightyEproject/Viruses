app.controller('Virus', ['$scope', 'content', function($scope, content) {
    content.success(function(data) {
      $scope.content = data;
    });  
  }]);