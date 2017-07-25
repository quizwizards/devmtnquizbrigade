'use strict';

angular.module('group-project', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './app/views/home.html'
    }).state('getstarted', {
        url: '/getstarted',
        templateUrl: './app/views/getstarted.html',
        controller: 'flashCardCtrl'
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
    $scope.rightChecked = false;
    $scope.wrongChecked = false;
    $scope.counter;
    $scope.arrayLength;
    $scope.data = { progress: 0 };

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

    $scope.toggleRightChecked = function () {
        $scope.rightChecked = true;
        $scope.wrongChecked = false;
    };

    $scope.toggleWrongChecked = function () {
        $scope.rightChecked = false;
        $scope.wrongChecked = true;
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
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
        });
    };

    $scope.recJsBasicData = function () {
        flashCardSvc.getJavascriptBasic().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
        });
    };

    $scope.recJsAdvancedData = function () {
        flashCardSvc.getJavascriptAdvanced().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
        });
    };

    $scope.recCssData = function () {
        flashCardSvc.getCss().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
        });
    };

    $scope.recHtmlData = function () {
        flashCardSvc.getHtml().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
        });
    };

    $scope.inc = function () {
        counter.count++;
        $scope.rightChecked = false;
        $scope.wrongChecked = false;
        flashCardSvc.incCard(counter).then(function (response) {
            $scope.rightChecked = response.data.right;
            $scope.wrongChecked = response.data.wrong;
            $scope.incData = response.data;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
            $scope.data.progress = $scope.counter / $scope.arrayLength * 100;
            console.log('progress: ', $scope.data.progress);
        });
    };

    $scope.dec = function () {
        counter.count--;
        flashCardSvc.decCard(counter).then(function (response) {
            $scope.rightChecked = response.data.right;
            $scope.wrongChecked = response.data.wrong;
            $scope.decData = response.data;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
            $scope.data.progress = $scope.counter / $scope.arrayLength * 100;
        });
    };

    $scope.sendCheckedData = function () {
        var data = {
            index: counter.count,
            right: $scope.rightChecked,
            wrong: $scope.wrongChecked
        };
        flashCardSvc.checkBox(data).then(function (response) {
            console.log(response);
        });
    };
});
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
        }).then(function (res) {
            return res;
        });
    };

    this.getJavascriptAdvanced = function () {
        return $http({
            url: '/api/getJSAdvanced',
            method: 'GET'
        }).then(function (res) {
            return res;
        });
    };

    this.getCss = function () {
        return $http({
            url: '/api/getCss',
            method: 'GET'
        }).then(function (res) {
            return res;
        });
    };

    this.getHtml = function () {
        return $http({
            url: '/api/getHtml',
            method: 'GET'
        }).then(function (res) {
            return res;
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
    this.checkBox = function (data) {
        return $http({
            url: '/api/checkRight',
            method: 'POST',
            data: data
        });
    };
});
'use strict';

angular.module('group-project').service('mainSvc', function ($http) {

    this.getUser = function () {
        return $http({
            url: "/api/checkRestriction",
            method: "GET"
        });
    };
});
//# sourceMappingURL=maps/all.js.map
