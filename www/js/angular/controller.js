geoApp.controller('mainController', function($scope, $route, $http){
   // $scope.menu_selection = ["stadtpark", "tagebuch", "werkzeuge"];
    
    $http.get('categories.json')
    .then(function(res){
         $scope.menu_selection = res.data.categories;
    });

});



