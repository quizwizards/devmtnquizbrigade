angular.module('group-project')
.directive('sideNav', function(){
    return {
        templateUrl: './app/directives/sideNavtmpl.html',
        controller: 'flashCardCtrl',
    }
})