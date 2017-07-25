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
            controller: 'flashCardCtrl',
            // resolve: {
            //     user: function($state, mainSvc){
            //        return mainSvc.getUser()
            //         .then((resp) => {
            //             if(!resp.data){
            //                 $state.go('home')
            //             }
            //         })
            //     }
            // }
        })
        .state('flashCards', {
            url: '/flash-cards/:id',
            templateUrl: './app/views/flashCards.html'
        })
        .state('start', {
            url: '/start',
            templateUrl: './app/views/start.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: './app/views/about.html'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: './app/views/profile.html'
        })
})