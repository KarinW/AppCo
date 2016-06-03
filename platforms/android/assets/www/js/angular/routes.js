geoApp.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      }).
      when('/about', {
        templateUrl: 'views/about.html'
      }).
      when('/stadtpark', {
        templateUrl: 'views/stadtpark.html'
      }).
      when('/tagebuch', {
        templateUrl: 'views/tagebuch.html'
      }).
      when('/werkzeuge', {
        templateUrl: 'views/werkzeuge.html'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);