angular.module('group-project').controller('flashCardCtrl', function ($scope, flashCardSvc) {

    var counter = {
        count: 0
    }

    var arrayLength;

    $scope.showSubMenu = false;

    $scope.showMenu = () => {
        $scope.showSubMenu = !$scope.showSubMenu;
    }

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
    }
    $scope.toggleDataDec = function () {
        $scope.showZero = false;
        $scope.showInc = false;
        $scope.showDec = true;
    }
    $scope.toggleBackButton = function () {
        if (counter.count > 0) {
            $scope.backButtonShow = true;
        } else {
            $scope.backButtonShow = false;
        }
    }
    $scope.toggleNextButton = function () {
        if (counter.count === arrayLength - 1) {
            $scope.nextButtonShow = false;
        } else {
            $scope.nextButtonShow = true;
        }
    }



    $scope.recJsAllData = function () {
        flashCardSvc.getJavascriptAll().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        })
    }

    $scope.recJsBasicData = function () {
        flashCardSvc.getJavascriptBasic().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        })
    }

    $scope.recJsAdvancedData = function () {
        flashCardSvc.getJavascriptAdvanced().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        })
    }

    $scope.recCssData = function () {
        flashCardSvc.getCss().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        })
    }

    $scope.recHtmlData = function () {
        flashCardSvc.getHtml().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        })
    }

    $scope.inc = function () {
        counter.count++
            flashCardSvc.incCard(counter).then(function (response) {
                console.log(response.data);
                $scope.incData = response.data;
            })
    }

    $scope.dec = function () {
        counter.count--;
        flashCardSvc.decCard(counter).then(function (response) {
            $scope.decData = response.data;
        })
    }



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




})