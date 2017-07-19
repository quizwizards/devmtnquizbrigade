angular.module('group-project')
.directive('flashCards', function(){
    return {
        templateUrl: './app/directives/flashCards-tmpl.html',
        controller: '.app/directives/flashCardCtrl',
        scope: {
            incrementButton: '&',
            decrementButton: '&'
        }
    }
})