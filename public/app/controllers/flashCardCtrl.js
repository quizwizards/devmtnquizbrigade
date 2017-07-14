angular.module('group-project').controller('flashCardCtrl', function ($scope, flashCardSvc) {
    $scope.recJsAllData = function () {
        flashCardSvc.getJavascriptAll().then(function (response) {
            $scope.jsAllData = response;
        })
    }
    $scope.recJsAllData();

    $scope.recJsBasicData = function () {
        flashCardSvc.getJavascriptBasic().then(function (response) {
            $scope.jsBasicData = response;
        })
    }
    $scope.recJsBasicData();

    $scope.recJsAdvancedData = function () {
        flashCardSvc.getJavascriptAdvanced().then(function (response) {
            $scope.jsAdvancedData = response;
        })
    }
    $scope.recJsAdvancedData();


    $scope.recCssData = function () {
        flashCardSvc.getCss().then(function (response) {
            $scope.cssData = response.data.terms
        })
    }
    $scope.recCssData();

    $scope.recHtmlData = function () {
        flashCardSvc.getHtml().then(function (response) {
            $scope.htmlData = response.data.terms;
        })
    }
    $scope.recHtmlData();


})