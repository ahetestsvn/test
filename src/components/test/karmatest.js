(function() {
    'use strict';

    /* load libraries */
    require(['angular'], function (angular) {
    //angular is now loaded.
	});
	
angular.module('myApp').controller('MyCtrl', function($scope) {
    $scope.value = 0;
    $scope.maxValue = 3;
    $scope.incrementValue = function() {
        if ($scope.value < $scope.maxValue) {
            $scope.value++;
        } else {
            $scope.value = 0;
        }
    };
});

describe('MyCtrl', function() {
	beforeEach(module('myApp'));
	
	var scope, controller;
    beforeEach(inject(function($controller, $rootScope) {
         scope = $rootScope.$new();
         controller = $controller('MyCtrl', {$scope: scope});
    }));
    
    it('has correct initial values', function() {
        expect(scope.value).toBe(0);
        expect(scope.maxValue).toBe(3);  
    });
    
    it('increments correctly', function() {
        scope.incrementValue();
        expect(scope.value).toBe(1);
        scope.incrementValue();
        expect(scope.value).toBe(2);
        scope.incrementValue();
        expect(scope.value).toBe(3);
        scope.incrementValue();
        expect(scope.value).toBe(0);
    });
});
})();