
var hostelMS = angular.module("hostelMS",[]);

hostelMS.controller('mainController',["$scope",function($scope){
    $scope.people = people;
    $scope.names = names;
}]);

var people = 
{
    studentName:'',
    admissionNo:'',
    regNo:'',
    course:'',
    semester:'',
}

var names = ["Student Name", "Admission Number", "Register Number", "Course", "Semester"];