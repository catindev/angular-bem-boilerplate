angular.module('webapp', [ 
    'ngRoute', 
    'tenphi.bem'
])


.config(function ($routeProvider) {
    $routeProvider.
/*        when('/', {
            templateUrl: 'components/first-page/template.html',
            controller: 'firstPageController'
        }).   */             
        otherwise({ redirectTo: '/' });
})

.controller('webAppController', 
    function ($rootScope) {
	
        var app = this;

    }
);