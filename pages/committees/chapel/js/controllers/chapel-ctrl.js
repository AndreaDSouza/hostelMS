chapelApp.controller("chapelCtrl",["$scope","$timeout","dbServices" ,function($scope,$timeout,dbServices){
    
    dbServices.get("chapelList", function(obj){
        $timeout(function() {
            $scope.chapelList = obj;
            console.log($scope.chapelList);
            
        });
    });
    
}]);