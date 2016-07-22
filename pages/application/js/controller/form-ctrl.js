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
    
    $scope.postJSON = function(){
        
        var general = {};
        general.name = $scope.applicant.name;
        general.regNo = $scope.applicant.regNo;
        general.religion = $scope.applicant.religion;
        general.sect = $scope.applicant.sect;
        general.phNo = $scope.applicant.phNo;

        var chapel = {};
        chapel.name = $scope.applicant.name;
        chapel.regNo = $scope.applicant.regNo;

        var reader = {};
        reader.name = $scope.applicant.name;
        reader.regNo = $scope.applicant.regNo;
        reader.phNo = $scope.applicant.phNo;
        
        console.log($scope.applicant);
        console.log(general);
        dbServices.post( "bioData", $scope.applicant );
        dbServices.post( "generalList", general );
        
        if($scope.applicant.religion.toUpperCase() == "CHRISTIAN")
        {
            console.log($scope.chapel);
            console.log($scope.reader);
            dbServices.post( "chapelList", chapel );
            dbServices.post( "readingList", reader );
        }
    }
}]);