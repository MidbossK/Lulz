angular
.module("questApp")
.controller("questCreate", function ($scope, questFactory) {
    $scope.newEmployee = {}

    /**
     * Use this event listener to check if there is any data
     * in the factory cache each time the user loads a view
     * that is bound to this controller
     */

    $scope.$on('$questShown', function(event) {
        if (!questFactory.cache) {
            console.info("No cached data")
            questFactory.list(true).then(data => {
                $scope.quest = data
            })
        } else {
            console.info("Using cached data")
            $scope.quest = questFactory.cache
        }
    })

    $scope.newQuest = function () {
        const quest = {
            "questName": $scope.newQuest.questName,
            "pointsWorth": $scope.newQuest.questWorth,
            "questStart": Date.now(),
            "questEnd": 0
        }

        /**
         * Use the factory to POST to Firebase
         */
        questFactory.add(employee).then(() => {
            $scope.newQuest.firstName = ""
            $scope.newQuest.lastName = ""
        })

        /**
         * If POST was successful, retrieve new list of quests
         */
        .then(() => {
            return questFactory.list()
        })

        /**
         * Bind new list of quests to scope so view gets updated
         */
        .then(quests => {
            $scope.quests = quests
        })
    }
})