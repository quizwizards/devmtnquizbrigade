angular.module('group-project').controller('flashCardCtrl', function ($scope, flashCardSvc) {

    var counter = {
        count: 0
    }
    
    var arrayLength;

    $scope.startData;
    $scope.incData;
    $scope.decData;

    $scope.showZero = true;
    $scope.showInc = false;
    $scope.showDec = false;
    $scope.nextButtonShow = true;
    $scope.backButtonShow = false;

    $scope.toggleDataInc = function() {
        $scope.showZero = false;
        $scope.showInc = true;
        $scope.showDec = false;
    }
    $scope.toggleDataDec = function() {
        $scope.showZero = false;
        $scope.showInc = false;
        $scope.showDec = true;
    }
    $scope.toggleBackButton = function() {
        if (counter.count > 0) {
            $scope.backButtonShow = true;
        } else {
            $scope.backButtonShow = false;
        }
    }
    $scope.toggleNextButton = function() {
        console.log("next counter", counter.count)
        console.log('next array length', arrayLength)
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

    $scope.incJSAllData = function(){
        counter.count++
        flashCardSvc.incJSAllData(counter).then(function(response) {
            $scope.incData = response;
        })
    }

    $scope.decJSAllData = function() {
        counter.count--;
        flashCardSvc.decJSAllData(counter).then(function(response) {
            $scope.decData = response;
        })
    }

    $scope.recJsBasicData = function () {
        flashCardSvc.getJavascriptBasic().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        })
    }

    $scope.incJSBasicData = function(){
        counter.count++
        flashCardSvc.incJSBasicData(counter).then(function(response) {
            console.log('front end response: ', response)
            $scope.incData = response;
        })
    }

    $scope.decJSBasicData = function() {
        counter.count--;
        flashCardSvc.decJSBasicData(counter).then(function(response) {
            $scope.decData = response;
        })
    }

    $scope.recJsAdvancedData = function () {
        flashCardSvc.getJavascriptAdvanced().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        })
    }

    $scope.incJSAdvancedData = function(){
        counter.count++
        flashCardSvc.incJSAdvancedData(counter).then(function(response) {
            $scope.incData = response;
        })
    }

    $scope.decJSAdvancedData = function() {
        counter.count--;
        flashCardSvc.decJSAdvancedData(counter).then(function(response) {
            $scope.decData = response;
        })
    }    


    $scope.recCssData = function () {
        flashCardSvc.getCss().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        })
    }

    $scope.incCssData = function(){
        counter.count++
        flashCardSvc.incCssData(counter).then(function(response) {
            $scope.incData = response;
        })
    }

    $scope.decCssData = function() {
        counter.count--;
        flashCardSvc.decCssData(counter).then(function(response) {
            $scope.decData = response;
        })
    }     

    $scope.recHtmlData = function () {
        flashCardSvc.getHtml().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
        })
    }

    $scope.incHtmlData = function(){
        counter.count++
        flashCardSvc.incHtmlData(counter).then(function(response) {
            $scope.incData = response;
        })
    }

    $scope.decHtmlData = function() {
        counter.count--;
        flashCardSvc.decHtmlData(counter).then(function(response) {
            $scope.decData = response;
        })
    }     

})