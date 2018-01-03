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

        completeQuest(quest){
            quest.completedFlag = true
            return $http({
                url: `https://lulz-bedcc.firebaseio.com/quests/${quest.id}.json`,
                method: 'PATCH',
                data: quest,
            })
        },        


        deleteQuest(id){
                    return $http({
                        url: `https://lulz-bedcc.firebaseio.com/quests/${id}.json`,
                        method: 'DELETE',
                })
        },

        editQuest(quest){


            return $http({
                url: `https://lulz-bedcc.firebaseio.com/quests/${quest.id}.json`,
                method: 'PATCH',
                data: quest,
                });
        },
    

        getQuestById(id)  {

            let quest = {}
            for (let index = 0; index < activeQuests.length; index++) {    
                if (activeQuests[index].id == id){
                    quest = activeQuests[index] 
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
                    quests[key].id = key
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

