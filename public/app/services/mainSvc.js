angular.module('group-project').service('mainSvc', function($http) {

    this.getUser = () => {
        return $http({
            url: "/api/checkRestriction", 
            method: "GET"
        })
    }
    
})