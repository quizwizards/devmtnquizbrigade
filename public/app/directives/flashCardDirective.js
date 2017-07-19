angular.module('group-project')
.directive('flashCards', function(){
    return {
        templateUrl: './app/directives/flashCards-tmpl.html',
        controller: 'flashCardCtrl',
        scope: {
            incrementButton: '&',
            decrementButton: '&'
        }
    }
})