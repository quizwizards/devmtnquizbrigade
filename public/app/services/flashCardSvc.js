angular
    .module('group-project')
    .service('flashCardSvc', function ($http) {

        this.getJavascriptAll = () => {
            return $http({url: '/api/getJSAll', method: 'GET'}).then(res => {
                return res
            })
        }

        this.getJavascriptBasic = () => {
            return $http({url: '/api/getJSBasic', method: 'GET'}).then(res => {
                return res
            })
        }

        this.getJavascriptAdvanced = () => {
            return $http({url: '/api/getJSAdvanced', method: 'GET'}).then(res => {
                return res
            })
        }

        this.getReact = () => {
            return $http({url: '/api/getReact', method: 'GET'}).then(res => {
                return res
            })
        }

        this.getCss = () => {
            return $http({url: '/api/getCss', method: 'GET'}).then(res => {
                return res
            })
        }

        this.getHtml = () => {
            return $http({url: '/api/getHtml', method: 'GET'}).then(res => {
                return res
            })
        }

        this.incCard = (count) => {
            console.log('Service: ', count)
            return $http({url: '/api/inc', method: 'POST', data: count})
        }
        this.decCard = (count) => {
            return $http({url: '/api/dec', method: 'POST', data: count})
        }
        this.checkBox = (data) => {
            return $http({url: '/api/checkRight', method: 'POST', data: data})
        }
        this.saveSession = (data) => {
            return $http({url: '/api/saveSession', method: 'POST', data: data})
        }
        this.getProfile = () => {
            return $http({url: '/api/getUserData', method: 'GET'}).then(res => {
                return res
            })
        }
        this.restartSession = (data) => {
            return $http({url: '/api/restartSession', method: 'POST', data: data})
        }
        this.getRestart = () => {
            return $http({url: '/api/getRestart', method: 'GET'}).then(res => {
                return res
            })
        }
    })