angular.module('group-project').service('flashCardSvc', function ($http) {
    this.getJavascriptAll = () => {
        return $http({
            url: '/api/getJSAll',
            method: 'GET'
        })
    }
    this.incJSAllData = (count) => {
        console.log('Service: ', count)
        return $http({
            url: '/api/incjsalldata',
            method: 'POST',
            data: count
        })
    }
    this.decJSAllData = (count) => {
        return $http({
            url: '/api/decjsalldata',
            method: 'POST',
            data: count
        })
    }
    this.getJavascriptBasic = () => {
        return $http({
            url: '/api/getJSBasic',
            method: 'GET'
        })
    }
    this.incJSBasicData = (count) => {
        return $http({
            url: '/api/incjsbasicdata',
            method: 'POST',
            data: count
        })
    }
    this.decJSBasicData = (count) => {
        return $http({
            url: '/api/decjsbasicdata',
            method: 'POST',
            data: count
        })
    }
    this.getJavascriptAdvanced = () => {
        return $http({
            url: '/api/getJSAdvanced',
            method: 'GET'
        })
    }
    this.incJSAdvancedData = (count) => {
        return $http({
            url: '/api/incjsadvanceddata',
            method: 'POST',
            data: count
        })
    }
    this.decJSAdvancedData = (count) => {
        return $http({
            url: '/api/decjsadvanceddata',
            method: 'POST',
            data: count
        })
    }
    this.getCss = () => {
        return $http({
            url: '/api/getCss',
            method: 'GET'
        })
    }
    this.incCssData = (count) => {
        return $http({
            url: '/api/inccssdata',
            method: 'POST',
            data: count
        })
    }
    this.decCssData = (count) => {
        return $http({
            url: '/api/deccssdata',
            method: 'POST',
            data: count
        })
    }
    this.getHtml = () => {
        return $http({
            url: '/api/getHtml',
            method: 'GET'
        })
    }
    this.incHtmlData = (count) => {
        return $http({
            url: '/api/inchtmldata',
            method: 'POST',
            data: count
        })
    }
    this.decHtmlData = (count) => {
        return $http({
            url: '/api/dechtmldata',
            method: 'POST',
            data: count
        })
    }



})