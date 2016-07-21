hostelClient.controller('formCtrl',["$scope","$log","dbServices",function($scope,$log,dbServices){

    $scope.applicant = {
    
        regNo:"",
        name:"",
        semester:"",
        entryYear:"",
        religion:"",
        isCatholic:false,
        caste:"",
        bloodGroup:"",
        mobileNo:"",
        dob:"",
        email:"",
        
        otherDetails:{
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
        }
    };
    
    $scope.general = {
        name : $scope.applicant.name,
        regNo : $scope.applicant.regNo,
        religion : $scope.applicant.religion,
        sect : $scope.applicant.sect,
        phNo: $scope.applicant.phNo
    };
    
    $scope.chapel = {
        name : $scope.applicant.name,
        regNo : $scope.applicant.regNo,
    };
    
    $scope.reader = {
        name : $scope.applicant.name,
        regNo : $scope.applicant.regNo,
        phNo: $scope.applicant.phNo
    }
    
    
    $scope.postJSON = function(){
        console.log("Clicked");
        dbServices.post( "bioData", $scope.applicant );
        dbServices.post( "generalList", $scope.applicant );
        
        if($scope.applicant.religion.toUpperCase() == "CHRISTIAN")
        {
            dbServices.post( "chapelList", $scope.chapel );
            dbServices.post( "readingList", $scope.reader );
        }
    }
}]);