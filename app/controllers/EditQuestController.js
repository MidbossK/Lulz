app.controller('EditQuestController', function($scope, questFactory){
    
    $scope.
    
        $scope.quests = questFactory.getSortedQuests();
        $scope.activeQuests = $scope.quests[0]
        $scope.completedQuests = $scope.quests[1]
    })