angular.module("QuestLog")
.controller("authCTRL", function($scope, $location, AuthFactory) {
    $scope.auth = {}

    $scope.logoutUser = function () {
        AuthFactory.logout()
        $location.url('/auth')
    }

    $scope.logMeIn = function () {
        AuthFactory.authenticate($scope.auth).then(function (didLogin) {
            AuthFactory.setUserId(didLogin.uid)
            $scope.login = {}
            $location.url("/home")
        })
    }
    
    $scope.registerUser = function(registerNewUser) {
      AuthFactory.registerWithEmail(registerNewUser).then(function (didRegister) {
        $scope.logMeIn(registerNewUser)
      })
    }

})