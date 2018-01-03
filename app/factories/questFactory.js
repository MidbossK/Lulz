app.factory("questFactory", function ($http, $timeout, $location, $route) {
    let activeQuests = []
    let completedQuests = []
    // const allQuests = [];

    const questFactoryObject = {
        addQuest(quest){            
            quest.createdAt = Date.now();
            quest.completedAt = null;
            quest.completedFlag = false;

            
            return new Promise((resolve, reject) => {
                $http({
                    url: 'https://lulz-bedcc.firebaseio.com/quests/.json',
                    method: 'POST',
                    data: quest,
                })
                .then((response) => {
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },

        completeQuest(id){
            for (let index = 0; index < allQuests.length; index++) {
                    if (allQuests[index].id === id){
                    allQuests[index].completedFlag = true
                }
            }        
        },

        deleteQuest(id){
            "byeByeEvent": {
                value: function (key) {
                    return firebase.auth().currentUser.getIdToken(true)
                        .then(idToken => {
                            return $http({
                                method: "DELETE",
                                url: `${Firebase_Config.databaseURL}/savedEvents/${key}/.json?auth=${idToken}`
                            })
                        })
                }
            },
                }               
            }
        },

        editQuest(newQuest){
            function writeUserData(expEarned) {
                firebase.database().ref('quests/' + uid).set({
                  expEarned: 22,
                });
            }
        },
    

        getQuestById(id)  {

            let quest = {}
            for (let index = 0; index < allQuests.length; index++) {    
                if (allQuests[index].id == id){
                    quest = allQuests[index] 
                }
            }
            return quest
        },

        getQuests() {
            return new Promise((resolve, reject) => {
                $http({
                    url: 'https://lulz-bedcc.firebaseio.com/quests.json', 
                    method: 'GET',
                })
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },

        sortQuests(quests){
            const active = []
            const completed = []

            Object.keys(quests).map((key) => {
                if (quests[key].completedFlag){
                    completed.push(quests[key]) 
                } else {
                    active.push(quests[key]) 
                }
            })

            console.log('sort', active, completed)
            return [active, completed]
        },

        getActiveQuests(){
            return this.activeQuests
        },
        getCompletedQuests(){
            return this.completedQuests
        },
    }
    return questFactoryObject
})

