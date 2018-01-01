let app = angular.module("QuestLog",['ngRoute'])

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
    .when('/home', {
        templateUrl: 'app/partials/quest-list.html',
        controller: 'QuestListController',
    })
    .when('/', {
        templateUrl: 'app/partials/login.html',
        controller: 'loginController',
    })

    .when('/edit', {
        templateUrl: 'app/partials/quest-edit.html',
        controller: 'EditQuestController',
    })

    .when('/create', {
        templateUrl: 'app/partials/quest-create.html',
        controller: 'CreateQuestController',
    })

    .otherwise ('/home');


    $locationProvider.hashPrefix('');

});


    // angular.module(Lulz).run(function (FIREBASE_CONFIG) {
    //     firebase.initializeApp(FIREBASE_CONFIG)
    // })

