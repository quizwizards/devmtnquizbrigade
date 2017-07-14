angular.module('group-project').controller('flashCardCtrl', function($scope, flashCardSvc) {
    $scope.recJsBasicData = function() {
        flashCardSvc.getJavascriptAll().then(function(response) {
            $scope.data = response;
        })
    }
    $scope.recJsBasicData();
    
    $scope.recCssData = function() {
        flashCardSvc.getCss().then(function(response) {
            $scope.cssData = response.data.terms
        })
    }
    $scope.recCssData();

    $scope.recHtmlData = function() {
        flashCardSvc.getHtml().then(function(response) {
            $scope.htmlData = response.data.terms;
        })
    }
    $scope.recHtmlData();


})