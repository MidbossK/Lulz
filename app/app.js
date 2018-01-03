let app = angular.module("QuestLog",['ngRoute'])

app.config(function ($routeProvider, $locationProvider, FIREBASE_CONFIG) {

    $routeProvider
    .when('/home', {
        templateUrl: 'app/partials/quest-list.html',
        controller: 'QuestListController',
    })
    .when('/', {
        templateUrl: 'app/partials/login.html',
        controller: 'authCTRL',
    })

    .when('/store', {
        templateUrl: 'app/partials/item-store.html',
        controller: 'StoreController',
    })

    .when('/edit/:id', {
        templateUrl: 'app/partials/quest-edit.html',
        controller: 'EditQuestController',
    })

    .when('/create', {
        templateUrl: 'app/partials/quest-create.html',
        controller: 'CreateQuestController',
    })

    .otherwise ('/');


    $locationProvider.hashPrefix('');
    firebase.initializeApp(FIREBASE_CONFIG)
});


    // angular.module(Lulz).run(function (FIREBASE_CONFIG) {
    //     firebase.initializeApp(FIREBASE_CONFIG)
    // })

