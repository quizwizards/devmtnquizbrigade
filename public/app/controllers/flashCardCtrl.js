angular.module('group-project').controller('flashCardCtrl', function($scope, flashCardSvc) {
    $scope.recJsBasicData = function() {
        flashCardSvc.getJavascriptBasic().then(function(response) {
            console.log(response.data.terms);
            $scope.data = response.data.terms
        })
    }
    $scope.recJsBasicData();
    $scope.test = 'working'
})