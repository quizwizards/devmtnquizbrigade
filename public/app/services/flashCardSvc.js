angular.module('group-project').service('flashCardSvc', function($http) {
    this.getJavascriptBasic = () => {
        return $http({
            url: '/api/getJSBasic',
            method: 'GET'
        })
    }
})