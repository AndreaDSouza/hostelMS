var hostelClient = angular.module("hostelClient",[]);

hostelClient.controller('formCtrl',["$scope","$http",function($scope,$http){

    $scope.appDetails =  appDetails;
    $scope.postJSON =  function postJSON()
    {
        console.log("Clicked");
        $http.post('../server/applicants.json',{ appDetails: $scope.appDetails})
        .success(function (result)
        {
            console.log("Nailed it!");
        })

        .error(function (data,status)
        {
            console.log("Whoops!");
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
