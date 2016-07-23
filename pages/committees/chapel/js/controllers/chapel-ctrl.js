chapelApp.controller("chapelCtrl",["$scope","$timeout","dbServices" ,function($scope,$timeout,dbServices){
    
    dbServices.get("chapelList", function(obj){
        $timeout(function() {
            $scope.result = obj;
            console.log($scope.result);
            
        });
    });
    
}]);