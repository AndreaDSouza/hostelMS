var hostelClient = angular.module("hostelClient",[]);

hostelClient.controller('mainController',["$scope",function($scope){
    $scope.applicantDetails = applicantDetails;
}]);

hostelClient.directive("inputElement",function(){
                <input class = "right" type = "text" ng-model = "value[1]">
});
