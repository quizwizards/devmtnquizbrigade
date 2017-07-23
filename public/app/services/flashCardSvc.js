angular.module('group-project').service('flashCardSvc', function ($http) {
    

    this.getJavascriptAll = () => {
        return $http({
            url: '/api/getJSAll',
            method: 'GET'
        }).then(res => {
            console.log("SERVICE: ", res)
            return res
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
    
    this.incCard = (count) => {
        console.log('Service: ', count)
        return $http({
            url: '/api/inc',
            method: 'POST',
            data: count
        })
    }
    this.decCard = (count) => {
        return $http({
            url: '/api/dec',
            method: 'POST',
            data: count
        })
    }
    this.checkRight = (count) => {
        return $http({
            url: '/api/checkRight',
            method: 'POST',
            data: count
        })
    }
})