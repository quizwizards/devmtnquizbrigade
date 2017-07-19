'use strict';

angular.module('group-project', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './app/views/home.html'
    }).state('getstarted', {
        url: '/getstarted',
        templateUrl: './app/views/getstarted.html',
        controller: 'mainCtrl'
    }).state('flashCards', {
        url: '/flash-cards',
        templateUrl: './app/views/flashCards.html'
    });
});
'use strict';

angular.module('group-project').controller('flashCardCtrl', function ($scope, flashCardSvc) {
    $scope.recJsAllData = function () {
        flashCardSvc.getJavascriptAll().then(function (response) {
            $scope.jsAllData = response;
        });
    };
    $scope.recJsAllData();

    $scope.recJsBasicData = function () {
        flashCardSvc.getJavascriptBasic().then(function (response) {
            $scope.jsBasicData = response;
        });
    };
    $scope.recJsBasicData();

    $scope.recJsAdvancedData = function () {
        flashCardSvc.getJavascriptAdvanced().then(function (response) {
            $scope.jsAdvancedData = response;
        });
    };
    $scope.recJsAdvancedData();

    $scope.recCssData = function () {
        flashCardSvc.getCss().then(function (response) {
            $scope.cssData = response.data.terms;
        });
    };
    $scope.recCssData();

    $scope.recHtmlData = function () {
        flashCardSvc.getHtml().then(function (response) {
            $scope.htmlData = response.data.terms;
        });
    };
    $scope.recHtmlData();
});
'use strict';

angular.module('group-project').controller('mainCtrl', function ($scope, mainSvc) {

    $scope.showSubMenu = false;
    console.log($scope.showSubMenu);

    $scope.showMenu = function () {
        $scope.showSubMenu = !$scope.showSubMenu;
    };
});
'use strict';

angular.module('group-project').directive('flashCards', function () {
    return {
        templateUrl: './app/directives/flashCards-tmpl.html',
        controller: '.app/directives/flashCardCtrl',
        scope: {
            incrementButton: '&',
            decrementButton: '&'
        }
    };
});
'use strict';

angular.module('group-project').service('flashCardSvc', function ($http) {
    this.getJavascriptAll = function () {
        return $http({
            url: '/api/getJSAll',
            method: 'GET'
        });
    };
    this.getJavascriptBasic = function () {
        return $http({
            url: '/api/getJSBasic',
            method: 'GET'
        });
    };
    this.getJavascriptAdvanced = function () {
        return $http({
            url: '/api/getJSAdvanced',
            method: 'GET'
        });
    };
    this.getCss = function () {
        return $http({
            url: '/api/getCss',
            method: 'GET'
        });
    };
    this.getHtml = function () {
        return $http({
            url: '/api/getHtml',
            method: 'GET'
        });
    };
});
'use strict';

angular.module('group-project').service('mainSvc', function () {});