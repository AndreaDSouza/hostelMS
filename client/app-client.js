var hostelClient = angular.module("hostelClient",[]);

hostelClient.controller('mainController',["$scope",function($scope){
    $scope.applicantDetails = applicantDetails;
}]);


var applicantDetails = 
{
    studentName:["Student Name",''],
    admissionNo:["Admission Number",''],
    regNo:["Register Number",''],
    course:["Course",''],
    semester:["Semester",'']
};