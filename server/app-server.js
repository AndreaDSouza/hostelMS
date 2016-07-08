var hostelServer = angular.module("hostelServer",[]);

hostelServer.controller('biodataCtrl',["$scope","$http",function($scope,$http){
    
    $http.get('applicants.json')
        .success(function(data){
            $scope.result = data;
    })
        .error(function(data,status){
            console.log(data);
    });
}]);