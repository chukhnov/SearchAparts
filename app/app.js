angular.module('myApp', ['ngRoute'])
    .config(
    function($routeProvider) {
        $routeProvider.
            when('/FirstPage', {
                templateUrl: 'app/search_form/search_form.template.html',
                controller: 'Data'
            }).
            when('/SecondPage', {
                templateUrl: 'app/search_results/search_results.template.html',
                controller: 'Results'
            }).
            otherwise({
                redirectTo: '/FirstPage'
            });
    });
