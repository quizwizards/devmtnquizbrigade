'use strict';

angular.module('group-project', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './app/views/home.html'
    });
});
'use strict';


angular.module('group-project').service('flashCardSvc', function ($http) {
    this.getJavascriptBasic = function () {
        return $http({
            url: '/api/getJSBasic',
            method: 'GET'
        });
    };
});
'use strict';

angular.module('group-project').service('mainSvc', function () {});
'use strict';

angular.module('group-project').controller('flashCardCtrl', function ($scope, flashCardSvc) {
    $scope.recJsBasicData = function () {
        flashCardSvc.getJavascriptBasic().then(function (response) {
            console.log(response.data.terms);
            $scope.data = response.data.terms;
        });
    };
    $scope.recJsBasicData();
    $scope.test = 'working';
});

'use strict';

angular.module('group-project').controller('mainCtrl', function ($scope, mainSvc) {});