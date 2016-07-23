messApp.controller("messCtrl",["$scope","$timeout","dbServices" ,function($scope,$timeout,dbServices){
    
    dbServices.get("generalList", function(obj){
        $timeout(function() {
            $scope.result = obj;
            console.log($scope.result);
            
        });
    });
    
}]);