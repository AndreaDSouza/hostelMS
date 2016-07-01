
var hostelMS = angular.module("hostelMS",[]);

hostelMS.controller('mainController',["$scope",function($scope){
    $scope.applicants = applicants;
}]);

hostelMS.directive("inputItem",function(){
    return{
        template:'<div class = "left" > {{value[0]}} </div> <input class = "right"type = "text" ng-model = "value[1]">'
    }
});

var applicants = 
{
    studentName:["Student Name",''],
    admissionNo:["Admission Number",''],
    regNo:["Register Number",''],
    course:["Course",''],
    semester:["Semester",'']
};
