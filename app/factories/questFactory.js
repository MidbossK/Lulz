app.factory("questFactory", function ($http, $timeout, $location, $route) {
    


    return {
        getQuests() {
            return [
                {
                    name: 'Slay the evil trash',
                    description: 'Take out garbage',
                    createdAt: '01/01/2018',
                    completedAt: null,
                    completedFlag: false,
                    expEarned: 50,
                },
                
                {
                    name: 'Purify the Kings dishes',
                    description: 'Do the dishes',
                    createdAt: '01/02/2018',
                    completedAt: null,
                    completedFlag: false,
                    expEarned: 30,

                },
                
                {
                    name: 'Keep the wilderness from overtaking the castle',
                    description: 'Cut the grass',
                    createdAt: '01/03/2018',
                    completedAt: null,
                    completedFlag: false,
                    expEarned: 100,
                },
                
                {
                    name: 'Kill the evil dust bunny',
                    description: 'Take out garbage',
                    createdAt: '11/11/2017',
                    completedAt: null,
                    completedFlag: true,
                    expEarned: 50,
                },

                {
                    name: 'Forge the epic homework answers',
                    description: 'Take out garbage',
                    createdAt: '04/07/2017',
                    completedAt: null,
                    completedFlag: true,
                    expEarned: 150,
                },
            ];
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




})

