var app = angular.module('myApp', []);

app.controller('myController', ['$scope', 'backendService', 
        function($ctrlScope, $backend) {
    $ctrlScope.counter = 0;
    
    $ctrlScope.incrementCounter = function() {
        $ctrlScope.counter += $backend.step();
    }
    
    $ctrlScope.resetCounter = function() {
        $ctrlScope.counter = $backend.init();
    }
}]);
