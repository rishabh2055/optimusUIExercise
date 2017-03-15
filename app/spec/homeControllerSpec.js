describe('homeController', function () {
     beforeEach(module('mainApp'));


    var $scope, $controller,homeCtrl, LineChartData;

    beforeEach(inject(function (_$controller_, _LineChartData_) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        LineChartData = _LineChartData_;
        homeCtrl = $controller('HomeController as homeCtrl', {$scope:$scope, LineChartData: LineChartData});
    }));
        it("Test001::Initiate controller", function () {
            expect($scope).toBeDefined();
            expect(homeCtrl).toBeDefined();
            expect($scope.homeCtrl.lineChartDataArr).toBe([]);
            expect($scope.homeCtrl.fetchLineChartData).toBeDefined();
        });
        it("$scope.homeCtrl.fetchLineChartData", function(){
            var resp = [
            {
                "key": "Series 1",
                "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371]]
            }
        ];
            $httpBackend.expectGET('data/LineChartData.json').respond(200, resp);
            $scope.homeCtrl.fetchLineChartData();
            expect($scope.homeCtrl.lineChartDataArr).toBe(resp);
            expect($scope.homeCtrl.ifGraphDataAvailable).toBe(true);
        });
});
