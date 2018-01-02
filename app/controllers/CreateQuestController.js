app.controller('CreateQuestController', function($scope, questFactory){
    const validateInfo = function() {
        console.log($scope)

        return (
            $scope.name && $scope.description && $scope.expEarned
        )

    }
  
    $scope.addQuest = () => {
        if (validateInfo()){
            questFactory.addQuest ({
                name: $scope.name,
                description: $scope.description,
                expEarned: $scope.expEarned,
            })

        } else {
            alert("Please fill in all fields.")
        }

    }  


    })