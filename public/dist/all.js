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
    });
});
'use strict';

angular.module('group-project').controller('flashCardCtrl', function ($scope, flashCardSvc) {

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

    $scope.recJsAllData = function () {
        flashCardSvc.getJavascriptAll().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        });
    };

    $scope.recJsBasicData = function () {
        flashCardSvc.getJavascriptBasic().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        });
    };

    $scope.recJsAdvancedData = function () {
        flashCardSvc.getJavascriptAdvanced().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        });
    };

    $scope.recCssData = function () {
        flashCardSvc.getCss().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        });
    };

    $scope.recHtmlData = function () {
        flashCardSvc.getHtml().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
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

    // $scope.incJSBasicData = function () {
    //     console.log('fired inc')
    //     counter.count++
    //     flashCardSvc.incJSBasicData(counter).then(function (response) {
    //         console.log('front end response: ', response)
    //         $scope.incData = response;
    //     })
    // }

    // $scope.decJSBasicData = function () {
    //     counter.count--;
    //     flashCardSvc.decJSBasicData(counter).then(function (response) {
    //         $scope.decData = response;
    //     })
    // }


    // $scope.incJSAdvancedData = function () {
    //     counter.count++
    //     flashCardSvc.incJSAdvancedData(counter).then(function (response) {
    //         $scope.incData = response;
    //     })
    // }

    // $scope.decJSAdvancedData = function () {
    //     counter.count--;
    //     flashCardSvc.decJSAdvancedData(counter).then(function (response) {
    //         $scope.decData = response;
    //     })
    // }


    // $scope.incCssData = function () {
    //     counter.count++
    //     flashCardSvc.incCssData(counter).then(function (response) {
    //         $scope.incData = response;
    //     })
    // }

    // $scope.decCssData = function () {
    //     counter.count--;
    //     flashCardSvc.decCssData(counter).then(function (response) {
    //         $scope.decData = response;
    //     })
    // }


    // $scope.incHtmlData = function () {
    //     counter.count++
    //     flashCardSvc.incHtmlData(counter).then(function (response) {
    //         $scope.incData = response;
    //     })
    // }

    // $scope.decHtmlData = function () {
    //     counter.count--;
    //     flashCardSvc.decHtmlData(counter).then(function (response) {
    //         $scope.decData = response;
    //     })
    // }

});
'use strict';

angular.module('group-project').controller('mainCtrl', function ($scope, mainSvc) {});
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

    // this.incJSBasicData = (count) => {
    //     return $http({
    //         url: '/api/incjsbasicdata',
    //         method: 'POST',
    //         data: count
    //     })
    // }
    // this.decJSBasicData = (count) => {
    //     return $http({
    //         url: '/api/decjsbasicdata',
    //         method: 'POST',
    //         data: count
    //     })
    // }

    // this.incJSAdvancedData = (count) => {
    //     return $http({
    //         url: '/api/incjsadvanceddata',
    //         method: 'POST',
    //         data: count
    //     })
    // }
    // this.decJSAdvancedData = (count) => {
    //     return $http({
    //         url: '/api/decjsadvanceddata',
    //         method: 'POST',
    //         data: count
    //     })
    // }

    // this.incCssData = (count) => {
    //     return $http({
    //         url: '/api/inccssdata',
    //         method: 'POST',
    //         data: count
    //     })
    // }
    // this.decCssData = (count) => {
    //     return $http({
    //         url: '/api/deccssdata',
    //         method: 'POST',
    //         data: count
    //     })
    // }

    // this.incHtmlData = (count) => {
    //     return $http({
    //         url: '/api/inchtmldata',
    //         method: 'POST',
    //         data: count
    //     })
    // }
    // this.decHtmlData = (count) => {
    //     return $http({
    //         url: '/api/dechtmldata',
    //         method: 'POST',
    //         data: count
    //     })
    // }

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