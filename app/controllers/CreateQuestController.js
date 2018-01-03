app.controller('CreateQuestController', function($scope, $location, questFactory, AuthFactory){
    $scope.userId = AuthFactory.getUserId()
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
                userId: $scope.userId
            })
            .then((response) => {
                $location.path("/home")
            })
            .catch((error) => {
                console.log("diff oh noes", error)
            })        
            
        } else {
            alert("Please fill in all fields.")
        }

    }  


    })