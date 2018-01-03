app.controller('QuestListController', function($scope, $route, questFactory){

    $scope.quests = questFactory.getQuests()
        .then((data) => {
           const sorted = questFactory.sortQuests(data);
            console.log($scope)
           $scope.activeQuests = sorted[0];
           $scope.completedQuests = sorted[1];

           $scope.$apply();
        });

    $scope.deleteQuest = function(id) {
    
        questFactory.deleteQuest(id)

        $route.reload()
    }

    $scope.completeQuest = function(id) {

        questFactory.completeQuest(id)

        $route.reload()
    }

})