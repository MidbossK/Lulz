app.controller('CreateQuestController', function($scope, $location, questFactory){
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
            $location.path("/home")

        } else {
            alert("Please fill in all fields.")
        }

    }  


    })