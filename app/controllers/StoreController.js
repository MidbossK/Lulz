app.controller('StoreController', function($scope, $route, itemFactory){

    $scope.items = itemFactory.getItems();

})