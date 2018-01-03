app.controller('QuestListController', function($scope, $route, questFactory, $location){

    $scope.quests = questFactory.getQuests()
        .then((data) => {
           const sorted = questFactory.sortQuests(data);
            console.log(sorted)
           $scope.activeQuests = sorted[0];
           $scope.completedQuests = sorted[1];

           $scope.$apply();
        });

    $scope.deleteQuest = function(id) {
    
        questFactory.deleteQuest(id)
        .then(() => {
            $route.reload()
        })}

    $scope.completeQuest = function(quest) {

        questFactory.completeQuest(quest)
         .then(() => {
             $route.reload()
         })
    }

    $scope.editQuest = function(quest) {
        $location.path(`/edit/${quest}`)
    } 
})