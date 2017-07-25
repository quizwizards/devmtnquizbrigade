angular.module('group-project')
.directive('profile', function(){
    return {
        templateUrl: './app/directives/profiletmpl.html',
        controller: 'flashCardCtrl'
        }
    }
)