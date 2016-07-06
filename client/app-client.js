var hostelClient = angular.module("hostelClient",[]);

hostelClient.controller('formCtrl',["$scope","$http","$log",function($scope,$http,$log){

    $scope.appDetails =  appDetails;
    $scope.postJSON =  function postJSON()
    {
        $scope.appDetails.push({
        $http.post('../server/applicants.json',{ appDetails:$scope.appDetails})
        .success(function (result)
        {
            $log.info("Nailed it!");
        })

        .error(function (data,status)
        {
            $log.info(data,status);
            $log.error("Whoops!");
        });
    }
    
    $scope.outputStuff = function outputStuff(){
    
        console.log("Please work!");
    
    }
    
}]);

hostelClient.controller('test',["$scope",function($scope)
{
    
    $scope.outputStuff = function outputStuff(){
    
        console.log("Please work!");
        
    }
    
}]);
