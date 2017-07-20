angular.module('group-project', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './app/views/home.html'
        })
        .state('getstarted', {
            url: '/getstarted',
            templateUrl: './app/views/getstarted.html',
            controller: 'flashCardCtrl'
        })
        .state('flashCards', {
            url: '/flash-cards/:id',
            templateUrl: './app/views/flashCards.html'
        })
        .state('start', {
            url: '/start',
            templateUrl: './app/views/start.html'
        })
})