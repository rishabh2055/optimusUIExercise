/* Defining Suits & specs for LineChart directive */

describe('LineChartDataSpec', function(){
    var element, scope, compile, lineChartData, directiveScope;
    beforeEach(module('MainApp'));
    beforeEach(inject(function(_$rootScope_, _$compile_){
        compile = _$compile_;
        scope = _$rootScope_.$new();
        lineChartData = [
            {
                "key": "Series 1",
                "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371]]
            }
        ];
        scope.graphData = lineChartData;
        element = angular.element('<div line-chart-data graph-data = "graphData"></div>');
        compile(element)(scope);
        scope.$digest();
    }));

    it("Check SVG is appended in DOM",function(){
        scope.graphData = lineChartData;
        element = angular.element('<div line-chart-data></div>');
        compile(element)(scope);
        scope.$digest();
        expect(element.find("svg")).toBeTruthy();
    });

    it("Test graph functionality",function(){
        scope.graphData = lineChartData;
        element = angular.element('<div line-chart-data></div>');
        compile(element)(scope);
        directiveScope = element.isolateScope();
        scope.$digest();
        expect(directiveScope.lineChartConfigObjFunc()).toBeDefined();
    });
});
