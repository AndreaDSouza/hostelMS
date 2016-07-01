
var hostelMS = angular.module("hostelMS",[]);

hostelMS.controller('mainController',["$scope",function($scope){
    $scope.people = applicants;
}]);


var applicants = 
{
    studentName:["Student Name",''],
    admissionNo:["Admission Number",''],
    regNo:["Register Number",''],
    course:["Course",''],
    semester:["Semester",'']
};
