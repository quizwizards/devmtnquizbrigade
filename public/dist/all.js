'use strict';

angular.module('group-project', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './app/views/home.html'
    });
});
'use strict';

angular.module('group-project').controller('mainCtrl', function ($scope, mainSvc) {});
'use strict';

angular.module('group-project').service('mainSvc', function () {});