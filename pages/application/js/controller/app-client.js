hostelClient.controller('formCtrl',["$scope","$log","dbServices",function($scope,$log,dbServices){

    $scope.appDetails = {};
    $scope.appDetails.name = "";
    $scope.appDetails.regNo = "";
    $scope.appDetails.studentDetails = {
        semester:"",
        entryYear:"",
        religion:"",
        caste:"",
        bloodGroup:"",
        mobileNo:"",
        dob:"",
        email:""
    };
    $scope.appDetails.otherDetails ={
        address:"",
        city:"",
        state:"",
        pinCode:"",

        father:
        {
            name:"",
            occupation:"",
            email:"",
            mobileNo:"",
        },
        mother:
        {
            name:"",
            occupation:"",
            email:"",
            mobileNo:"",
        },
        guardian:
        {
            name:"",
            occupation:"",
            email:"",
            address:"",
            city:"",
            state:"",
            mobileNo:"",
        }

    };
    
    $scope.postJSON = function(){
        console.log("Clicked");
        dbServices.post( "", $scope.appDetails );
    }
}]);