app.factory("itemFactory", function ($http, $timeout, $location, $route) {

    const allItems = [   
        {
            id: 1,
            itemName: 'Cake',
            description: 'Delicious',
            goldPrice: 200,
        },
        
        {
            id: 2,
            itemName: 'Pie',
            description: 'Tasty',
            goldPrice: 100,
        },

    ];

    const itemFactoryObject = {

        addItem(item){            
            item.itemName = 'Cake';
            item.description = 'Delicious';
            item.goldPrice = 200;
            item.id = allItems.length + 1
            
            allItems.push(item)
        },

        getItemById(id) {
            
            let item = {}
            for (let index = 0; index < allItems.length; index++) {    
                if (allItems[index].id == id){
                    item = allItems[index] 
                }
            }
            return item
        },

        getItems(){
            return allItems

        }

    }
    return itemFactoryObject
})