var chapelGenerator = angular.module("chapelGenerator",[]);
var readingList = [];
var rejectedList = [];

chapelGenerator.controller('chapelCtrl',["$scope","$http",function($scope,$http){
    
    $http.get('applicants.json')
        .success(function(data){
            $scope.result = data;
            for (var i = 0; i < $scope.result.length; i++)
            {
                console.log(i);
                console.log($scope.result.length);
                console.log($scope.result);
                if($scope.result[i].studentDetails.religion === "RC")
                    readingList.push($scope.result[i].name);
                else
                    rejectedList.push($scope.result[i].name);
            }
    })
        .error(function(data,status){
            console.log(data);
    });
    console.log(readingList);
}]);