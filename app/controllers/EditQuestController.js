app.controller('EditQuestController', function($scope, $location, $routeParams, questFactory){
    let questId = $routeParams.id
    let currentQuest = questFactory.getQuestById(questId)
    
    $scope.name = currentQuest.name
    $scope.description = currentQuest.description
    $scope.expEarned = currentQuest.expEarned

    $scope.editQuest = () => {
        questFactory.editQuest({
            id: questId,
            name: $scope.name,
            description: $scope.description,
            expEarned: $scope.expEarned
        })
        $location.path("/home")
    }
})