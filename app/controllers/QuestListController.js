app.controller('QuestListController', function($scope, $route, questFactory){

    $scope.quests = questFactory.getSortedQuests();
    $scope.activeQuests = $scope.quests[0]
    $scope.completedQuests = $scope.quests[1]

    $scope.deleteQuest = function(id) {
    
        questFactory.deleteQuest(id)

        $route.reload()
    }


})

