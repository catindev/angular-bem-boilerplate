angular.module('webapp', [
    'tenphi.bem',
    'getflat.home'
])

.config(function ($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});
