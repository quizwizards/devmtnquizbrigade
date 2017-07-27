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
    }).state('about', {
        url: '/about',
        templateUrl: './app/views/about.html'
    }).state('profile', {
        url: '/profile',
        templateUrl: './app/views/profile.html'
    }).state('flashCardsResume', {
        url: '/flash-cards-resume/:id',
        templateUrl: './app/views/flashCardsResume.html'
    });
});
'use strict';

angular.module('group-project').controller('flashCardCtrl', function ($scope, flashCardSvc, $state, $stateParams) {

    var counter = {
        count: 0
    };

    var arrayLength;

    var responseId;

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
    $scope.rightChecked;
    $scope.wrongChecked;
    $scope.counter;
    $scope.arrayLength;
    $scope.data = {
        progress: 0
    };

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
        switch (trainingType) {
            case 'JavaScript':
                $scope.recJsAllData();
                break;
            case 'JavaScript Basic':
                $scope.recJsBasicData();
                break;
            case 'JavaScript Advanced':
                $scope.recJsAdvancedData();
                break;
            case 'CSS':
                $scope.recCssData();
                break;
            case 'HTML':
                $scope.recHtmlData();
                break;
            default:
                break;

        }
    };

    $scope.checkTypeRestart = function () {
        console.log($scope.rightChecked, $scope.wrongChecked);
        $scope.recRestartData();
        console.log($scope.rightChecked, $scope.wrongChecked);
    };

    $scope.saveSession = function () {
        console.log('state params: ', $stateParams.id);
        flashCardSvc.saveSession($stateParams).then(function (response) {
            console.log('save session: ', response);
            console.log(response);
        });
    };

    $scope.returnToProfile = function () {
        if (confirm('Save progress before continuing. All unsaved progress will be deleted.') === true) {
            $state.go('profile');
        } else {
            console.log('user cancelled');
        }
    };

    $scope.recRestartData = function () {
        flashCardSvc.getRestart().then(function (response) {
            console.log("recrestart: ", response);
            counter.count = 0;
            $scope.rightChecked = response.data.firstCard.right;
            $scope.wrongChecked = response.data.firstCard.wrong;
            arrayLength = response.data.length;
            $scope.startData = response.data.firstCard;
            $scope.showCard = true;
            $scope.startButton = false;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
        });
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

    $scope.getProfile = function () {
        console.log('firing getProfile');
        flashCardSvc.getProfile().then(function (response) {
            console.log('profile response: ', response);
            $scope.userProfile = response.data.user.display_name;
            $scope.quizes = response.data.data;
        });
    };
    $scope.getProfile();

    $scope.restartSession = function (value) {
        console.log('value', value);
        flashCardSvc.restartSession(value).then(function (response) {
            console.log('response from restart: ', response);
            responseId = response.data.id;
        }).then(function () {
            $state.go('flashCardsResume', {
                id: responseId
            });
        });
    };
});
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

angular.module('group-project').directive('profile', function () {
    return {
        templateUrl: './app/directives/profiletmpl.html',
        controller: 'flashCardCtrl'
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
    this.saveSession = function (data) {
        return $http({
            url: '/api/saveSession',
            method: 'POST',
            data: data
        });
    };
    this.getProfile = function () {
        return $http({
            url: '/api/getUserData',
            method: 'GET'
        }).then(function (res) {
            return res;
        });
    };
    this.restartSession = function (data) {
        return $http({
            url: '/api/restartSession',
            method: 'POST',
            data: data
        });
    };
    this.getRestart = function () {
        return $http({
            url: '/api/getRestart',
            method: 'GET'
        }).then(function (res) {
            return res;
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
