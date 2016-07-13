var chapelGenerator = angular.module("chapelGenerator",[]);
var readingList = [];
var rejectedList = [];

chapelGenerator.controller('chapelCtrl',["$scope","$http",function($scope,$http){
    
    $http.get('/pages/associations/chapel/stage/applicants.json')
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
            $log.info(data);
            $log.error("EERER");
            $log.info(status);
    });
    $scope.list = readingList;
    $scope.Rlist = rejectedList;
}]);

chapelGenerator.directive('listEle',function(){
    return{
        template:'<div ng-repeat = "person in list"> {{ $index+1 }} {{ person }} </div>'
    }
});