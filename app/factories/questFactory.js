app.factory("questFactory", function ($http, $timeout, $location, $route) {
    

    const allQuests = [
        
        {
            id: 1,
            name: 'Keep the wilderness from overtaking the castle',
            description: 'Cut the grass',
            createdAt: '01/03/2018',
            completedAt: null,
            completedFlag: false,
            expEarned: 100,
        },
        
        {
            id: 2,
            name: 'Kill the evil dust bunny',
            description: 'Take out garbage',
            createdAt: '11/11/2017',
            completedAt: null,
            completedFlag: true,
            expEarned: 50,
        },

    ];


    const questFactoryObject = {
        addQuest(quest){            
            quest.createdAt = Date.now();
            quest.completedAt = null;
            quest.completedFlag = false;
            quest.id = allQuests.length + 1
            
            
            allQuests.push(quest)
        },

        completeQuest(id){
            for (let index = 0; index < allQuests.length; index++) {
                    if (allQuests[index].id === id){
                    allQuests[index].completedFlag = true
                }
            }        
        },

        deleteQuest(id){
           for (let index = 0; index < allQuests.length; index++) {    
                if (allQuests[index].id === id){
                    allQuests.splice(index,1)
                }               
            }
        },

        editQuest(newQuest){
            for (let index = 0; index < allQuests.length; index++) {    
                if (allQuests[index].id == newQuest.id){
                    allQuests[index].name = newQuest.name
                    allQuests[index].description = newQuest.description
                    allQuests[index].expEarned = newQuest.expEarned
                    console.log(allQuests[index])
                }
            }
        },

        getQuestById(id) {

            let quest = {}
            for (let index = 0; index < allQuests.length; index++) {    
                if (allQuests[index].id == id){
                    quest = allQuests[index] 
                }
            }
            return quest
        },

        getQuests() {
            return allQuests
        },

        getSortedQuests(){
            const activeQuests = []
            const completedQuests = []

            const quests = this.getQuests();
            
            quests.map((quest) => {
                if (quest.completedFlag){
                    completedQuests.push(quest) 
                } else {
                    activeQuests.push(quest) 
                }
            })

            return [activeQuests, completedQuests]

        }
        
    }

    return questFactoryObject
})

