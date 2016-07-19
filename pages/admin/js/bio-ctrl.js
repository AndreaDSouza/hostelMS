bioApp.controller("bioCtrl",["$scope","$timeout","dbServices", function($scope,$timeout,dbServices){

    dbServices.get("", function(obj){
        $timeout(function() {
            $scope.result = obj ;
            console.log($scope.result);
            
        });
    });
}])