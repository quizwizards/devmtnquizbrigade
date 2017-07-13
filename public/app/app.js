angular.module('group-project', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './app/views/home.html'
        })
        .state('getstarted', {
            url: '/getstarted',
            templateUrl: './app/views/getstarted.html'
        })
        
})