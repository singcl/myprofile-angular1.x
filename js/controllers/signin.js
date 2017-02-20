'use strict';

/* Controllers */
// signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
        $scope.authError = null;
        // Try to login
        $http.post('api/login.php', {
                email: $scope.user.email,
                password: $scope.user.password
            })
            .then(function(response) {
                console.log(JSON.stringify(response));
                if (!response.data.user) {
                    $scope.authError = '默认账户：mhd@163.com';
                } else {
                    $state.go('app.v1');
                }
            }, function(x) {
                $scope.authError = 'Server Error';
            });
    };
}]);