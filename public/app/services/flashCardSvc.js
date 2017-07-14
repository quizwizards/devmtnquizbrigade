angular.module('group-project').service('flashCardSvc', function($http) {
    this.getJavascriptAll = () => {
        return $http({
            url: '/api/getJSAll',
            method: 'GET'
        })
    }
    this.getJavascriptBasic = () => {
        return $http({
            url: '/api/getJSBasic',
            method: 'GET'
        })
    }
    this.getJavascriptAdvanced = () => {
        return $http({
            url: '/api/getJSAdvanced',
            method: 'GET'
        })
    }
    this.getCss = () => {
        return $http({
            url: '/api/getCss',
            method: 'GET'
        })
    }
    this.getHtml = () => {
        return $http({
            url: '/api/getHtml',
            method: 'GET'
        })
    }
    
})