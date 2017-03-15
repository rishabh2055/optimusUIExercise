app.controller('HomeController', ['$scope', 'LineChartData', function($scope, LineChartData) {
      var self = this;
      self.lineChartDataArr = [];
      self.ifGraphDataAvailable = false;

      /* Function used to fetch line chart data */
      self.fetchLineChartData = function(){
        LineChartData.fetchLineChartData().then(function(response){
          if(response.status === 200){
            self.lineChartDataArr = response.data;
            self.ifGraphDataAvailable = true;
          }
        }, function(err){
          self.lineChartDataArr = [];
          self.ifGraphDataAvailable = true;
        });
      };

      self.fetchLineChartData();
  }]);