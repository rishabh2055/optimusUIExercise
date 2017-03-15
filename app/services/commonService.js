/* Common Service file */
app.service('LineChartData', ['$http', function($http){
	/* Function used to fetch line chart data */
	this.fetchLineChartData = function(){
		var url = 'data/LineChartData.json';
		return $http({
					method: 'GET',
					url: url
				}).success(function (data, status, headers, config) {
		            return;
		        }).error(function (data, status, headers, config) {
		            return;
		        });
	};
}]);