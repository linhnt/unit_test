describe("myController Unit testing #1", function () {
    
    // Arrange
    var mockScope;
    var controller;

    beforeEach(angular.mock.module("myApp"));

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        mockScope = $rootScope.$new();
        
        controller = $controller("myController", {
            $scope: mockScope,
            backendService: {
                init: function() {
                    return 1;
                },
                step: function() {
                    return 5;
                },
                echo: function(msg) {
                    return 'echo[' + msg + ']';
                }
            }
        });
    }));
    
    it("Creates variable", function () {
        expect(mockScope.counter).toEqual(0);
    })
    
    it("Increments counter", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(5);
    });
    
    it("Resets counter", function () {
        mockScope.resetCounter();
        expect(mockScope.counter).toEqual(1);
    });
});
