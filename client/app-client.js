var hostelClient = angular.module("hostelClient",[]);

hostelClient.controller('formCtrl',["$scope","$http","$log",function($scope,$http,$log){

    $scope.appDetails =  appDetails;
    $scope.postJSON =  function postJSON()
    {
        $http.post(
            '../server/applicants.json',
            { appDetails:$scope.appDetails}
        )
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
    
}]);