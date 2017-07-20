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
    }).state('jsAll', {
        url: '/jsall',
        templateUrl: './app/views/jsAll.html'
    }).state('jsBasic', {
        url: '/jsbasic',
        templateUrl: './app/views/jsBasic.html'
    }).state('jsAdvanced', {
        url: '/jsadvanced',
        templateUrl: './app/views/jsAdvanced.html'
    }).state('css', {
        url: '/css',
        templateUrl: './app/views/css.html'
    }).state('html', {
        url: '/html',
        templateUrl: './app/views/html.html'
    }).state('about', {
        url: '/about',
        templateUrl: './app/views/about.html'
    });
});
'use strict';

angular.module('group-project').controller('flashCardCtrl', function ($scope, flashCardSvc) {

    var counter = {
        count: 0
    };

    var arrayLength;

    $scope.startData;
    $scope.incData;
    $scope.decData;

    $scope.showZero = true;
    $scope.showInc = false;
    $scope.showDec = false;
    $scope.nextButtonShow = true;
    $scope.backButtonShow = false;

    $scope.toggleDataInc = function () {
        $scope.showZero = false;
        $scope.showInc = true;
        $scope.showDec = false;
    };
    $scope.toggleDataDec = function () {
        $scope.showZero = false;
        $scope.showInc = false;
        $scope.showDec = true;
    };
    $scope.toggleBackButton = function () {
        if (counter.count > 0) {
            $scope.backButtonShow = true;
        } else {
            $scope.backButtonShow = false;
        }
    };
    $scope.toggleNextButton = function () {
        console.log("next counter", counter.count);
        console.log('next array length', arrayLength);
        if (counter.count === arrayLength - 1) {
            $scope.nextButtonShow = false;
        } else {
            $scope.nextButtonShow = true;
        }
    };

    $scope.recJsAllData = function () {
        flashCardSvc.getJavascriptAll().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        });
    };

    $scope.incJSAllData = function () {
        counter.count++;
        flashCardSvc.incJSAllData(counter).then(function (response) {
            $scope.incData = response;
        });
    };

    $scope.decJSAllData = function () {
        counter.count--;
        flashCardSvc.decJSAllData(counter).then(function (response) {
            $scope.decData = response;
        });
    };

    $scope.recJsBasicData = function () {
        flashCardSvc.getJavascriptBasic().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        });
    };

    $scope.incJSBasicData = function () {
        counter.count++;
        flashCardSvc.incJSBasicData(counter).then(function (response) {
            console.log('front end response: ', response);
            $scope.incData = response;
        });
    };

    $scope.decJSBasicData = function () {
        counter.count--;
        flashCardSvc.decJSBasicData(counter).then(function (response) {
            $scope.decData = response;
        });
    };

    $scope.recJsAdvancedData = function () {
        flashCardSvc.getJavascriptAdvanced().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        });
    };

    $scope.incJSAdvancedData = function () {
        counter.count++;
        flashCardSvc.incJSAdvancedData(counter).then(function (response) {
            $scope.incData = response;
        });
    };

    $scope.decJSAdvancedData = function () {
        counter.count--;
        flashCardSvc.decJSAdvancedData(counter).then(function (response) {
            $scope.decData = response;
        });
    };

    $scope.recCssData = function () {
        flashCardSvc.getCss().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        });
    };

    $scope.incCssData = function () {
        counter.count++;
        flashCardSvc.incCssData(counter).then(function (response) {
            $scope.incData = response;
        });
    };

    $scope.decCssData = function () {
        counter.count--;
        flashCardSvc.decCssData(counter).then(function (response) {
            $scope.decData = response;
        });
    };

    $scope.recHtmlData = function () {
        flashCardSvc.getHtml().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        });
    };

    $scope.incHtmlData = function () {
        counter.count++;
        flashCardSvc.incHtmlData(counter).then(function (response) {
            $scope.incData = response;
        });
    };

    $scope.decHtmlData = function () {
        counter.count--;
        flashCardSvc.decHtmlData(counter).then(function (response) {
            $scope.decData = response;
        });
    };

    $scope.showSubMenu = false;

    $scope.showMenu = function () {
        $scope.showSubMenu = !$scope.showSubMenu;
    };
});
'use strict';

angular.module('group-project').controller('mainCtrl', function ($scope, mainSvc) {});
'use strict';

angular.module('group-project').directive('about', function () {
    return {
        templateUrl: './app/directives/abouttmpl.html'
    };
});
'use strict';

angular.module('group-project').directive('flashCards', function () {
    return {
        templateUrl: './app/directives/flashCards-tmpl.html',
        controller: 'flashCardCtrl',
        scope: {
            incrementButton: '&',
            decrementButton: '&'
        }
    };
});
'use strict';

angular.module('group-project').directive('getStarted', function () {
    return {
        templateUrl: './app/directives/getStarted-tmpl.html'
    };
});
'use strict';

angular.module('group-project').directive('sideNav', function () {
    return {
        templateUrl: './app/directives/sideNavtmpl.html',
        controller: 'flashCardCtrl'
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
    this.incJSAllData = function (count) {
        console.log('Service: ', count);
        return $http({
            url: '/api/incjsalldata',
            method: 'POST',
            data: count
        });
    };
    this.decJSAllData = function (count) {
        return $http({
            url: '/api/decjsalldata',
            method: 'POST',
            data: count
        });
    };
    this.getJavascriptBasic = function () {
        return $http({
            url: '/api/getJSBasic',
            method: 'GET'
        });
    };
    this.incJSBasicData = function (count) {
        return $http({
            url: '/api/incjsbasicdata',
            method: 'POST',
            data: count
        });
    };
    this.decJSBasicData = function (count) {
        return $http({
            url: '/api/decjsbasicdata',
            method: 'POST',
            data: count
        });
    };
    this.getJavascriptAdvanced = function () {
        return $http({
            url: '/api/getJSAdvanced',
            method: 'GET'
        });
    };
    this.incJSAdvancedData = function (count) {
        return $http({
            url: '/api/incjsadvanceddata',
            method: 'POST',
            data: count
        });
    };
    this.decJSAdvancedData = function (count) {
        return $http({
            url: '/api/decjsadvanceddata',
            method: 'POST',
            data: count
        });
    };
    this.getCss = function () {
        return $http({
            url: '/api/getCss',
            method: 'GET'
        });
    };
    this.incCssData = function (count) {
        return $http({
            url: '/api/inccssdata',
            method: 'POST',
            data: count
        });
    };
    this.decCssData = function (count) {
        return $http({
            url: '/api/deccssdata',
            method: 'POST',
            data: count
        });
    };
    this.getHtml = function () {
        return $http({
            url: '/api/getHtml',
            method: 'GET'
        });
    };
    this.incHtmlData = function (count) {
        return $http({
            url: '/api/inchtmldata',
            method: 'POST',
            data: count
        });
    };
    this.decHtmlData = function (count) {
        return $http({
            url: '/api/dechtmldata',
            method: 'POST',
            data: count
        });
    };
});
'use strict';

angular.module('group-project').service('mainSvc', function () {});