angular.module('group-project').controller('mainCtrl', function ($scope, mainSvc) {


    $scope.showSubMenu = false;
    console.log($scope.showSubMenu)

    $scope.showMenu = () => {
        $scope.showSubMenu = !$scope.showSubMenu;
    }
})