/* Directive for line chart */
app.directive('lineChartData', function(){
    return{
        restrict: 'A',
        scope: {
			     graphData: '='
        },
		template: "<svg width='100%' height='600'></svg>",
        link: function(scope, ele, attrs){
		        var rawSvg = ele.find("svg")[0];
            /* Function used to define line chart configuration details */
            scope.lineChartConfigObjFunc = function(){
              var chart = nv.models.lineChart()
                            .x(function(d) { return d[0] })
                            .y(function(d) { return d[1] })
                            .color(d3.scale.category10().range())
                            .useInteractiveGuideline(true);
                    chart.xAxis
                        .tickFormat(function(d) {
                            return d3.time.format("%d %b %y %X")(new Date(d))
                        });                   

                    chart.yAxis.tickFormat(d3.format(',.2f'));

                    d3.select(rawSvg)
                        .datum(scope.graphData)
                        .transition().duration(500)
                        .call(chart);

                    nv.utils.windowResize(chart.update);

                    return chart;
            };

            nv.addGraph(scope.lineChartConfigObjFunc());
            
        }
    }
});