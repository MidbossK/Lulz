app.controller('QuestListController', function($scope, questFactory){

    $scope.quests = questFactory.getSortedQuests();
    $scope.activeQuests = $scope.quests[0]
    $scope.completedQuests = $scope.quests[1]
})

