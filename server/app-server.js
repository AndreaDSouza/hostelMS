var hostelServer = angular.module("hostelServer",[]);

hostelServer.controller('biodataCtrl',["$scope","$http",function($scope,$http){
    $http.get('applicants.json')
        .success(function(data){
            console.log("yay");
            $scope.results = data.blah;
    })
        .error(function(data,status){
            console.log("nay");
            console.log(data);
    });
}]);