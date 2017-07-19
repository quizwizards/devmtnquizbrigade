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
            controller: 'mainCtrl'
        })
        .state('flashCards', {
            url: '/flash-cards',
            templateUrl: './app/views/flashCards.html'
        })
        .state('jsAll', {
            url: '/jsall',
            templateUrl: './app/views/jsAll.html'
        })
        .state('jsBasic', {
            url: '/jsbasic',
            templateUrl: './app/views/jsBasic.html'
        })
        .state('jsAdvanced', {
            url: '/jsadvanced',
            templateUrl: './app/views/jsAdvanced.html'
        })
        .state('css', {
            url: '/css',
            templateUrl: './app/views/css.html'
        })
        .state('html', {
            url: '/html',
            templateUrl: './app/views/html.html'
        })
})