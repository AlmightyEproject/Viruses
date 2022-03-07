app.controller('Content', ['$scope', 'content', '$routeParams', function($scope, content, $routeParams) {
      content.success(function(data) {
        $scope.content = data[$routeParams.id];
        console.log( $scope.content)
      });
    }]);