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
            console.log("eewe", quest)
            
            quest.createdAt = Date.now();
            quest.completedAt = null;
            quest.completedFlag = false;
            quest.id = allQuests.length + 1
            
            allQuests.push(quest)

            console.log(allQuests)
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

