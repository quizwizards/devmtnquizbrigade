'use strict';

angular.module('group-project', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './app/views/home.html'
    }).state('getstarted', {
        url: '/getstarted',
        templateUrl: './app/views/getstarted.html',
        controller: 'flashCardCtrl',
        resolve: {}
    }).state('flashCards', {
        url: '/flash-cards/:id',
        templateUrl: './app/views/flashCards.html'
    }).state('start', {
        url: '/start',
        templateUrl: './app/views/start.html'
    });
});
'use strict';

angular.module('group-project').controller('flashCardCtrl', function ($scope, flashCardSvc, $state, $stateParams) {

    var counter = {
        count: 0
    };

    var arrayLength;

    $scope.showSubMenu = false;

    $scope.showMenu = function () {
        $scope.showSubMenu = !$scope.showSubMenu;
    };

    $scope.startData;
    $scope.incData;
    $scope.decData;

    $scope.showZero = true;
    $scope.showInc = false;
    $scope.showDec = false;
    $scope.nextButtonShow = true;
    $scope.backButtonShow = false;
    $scope.showCard = false;
    $scope.startButton = true;

    $scope.reset = function () {
        $scope.showCard = false;
        $scope.startButton = true;
    };

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
        if (counter.count === arrayLength - 1) {
            $scope.nextButtonShow = false;
        } else {
            $scope.nextButtonShow = true;
        }
    };

    $scope.checkType = function () {
        var trainingType = $stateParams.id;
        console.log(trainingType);
        switch (trainingType) {
            case 'allJS':
                $scope.recJsAllData();
                break;
            case 'basicJS':
                $scope.recJsBasicData();
                break;
            case 'advancedJS':
                $scope.recJsAdvancedData();
                break;
            case 'css':
                $scope.recCssData();
                break;
            case 'html':
                $scope.recHtmlData();
                break;
            default:
                break;

        }
    };

    $scope.recJsAllData = function () {
        flashCardSvc.getJavascriptAll().then(function (response) {
            counter.count = 0;
            arrayLength = response.data.length;
            $scope.startData = response.data.firstCard;
            $scope.showCard = true;
            $scope.startButton = false;
        });
    };

    $scope.recJsBasicData = function () {
        flashCardSvc.getJavascriptBasic().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
        });
    };

    $scope.recJsAdvancedData = function () {
        flashCardSvc.getJavascriptAdvanced().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
        });
    };

    $scope.recCssData = function () {
        flashCardSvc.getCss().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
        });
    };

    $scope.recHtmlData = function () {
        flashCardSvc.getHtml().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
        });
    };

    $scope.inc = function () {
        counter.count++;
        flashCardSvc.incCard(counter).then(function (response) {
            console.log(response.data);
            $scope.incData = response.data;
        });
    };

    $scope.dec = function () {
        counter.count--;
        flashCardSvc.decCard(counter).then(function (response) {
            $scope.decData = response.data;
        });
    };
});
'use strict';

angular.module('group-project').service('flashCardSvc', function ($http) {

    this.getJavascriptAll = function () {
        return $http({
            url: '/api/getJSAll',
            method: 'GET'
        }).then(function (res) {
            console.log("SERVICE: ", res);
            return res;
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

    this.incCard = function (count) {
        console.log('Service: ', count);
        return $http({
            url: '/api/inc',
            method: 'POST',
            data: count
        });
    };
    this.decCard = function (count) {
        return $http({
            url: '/api/dec',
            method: 'POST',
            data: count
        });
    };
});
'use strict';

angular.module('group-project').service('mainSvc', function () {});
'use strict';

angular.module('group-project').directive('flashCards', function () {
    return {
        templateUrl: './app/directives/flashCards-tmpl.html',
        controller: 'flashCardCtrl'
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
//# sourceMappingURL=maps/all.js.map
