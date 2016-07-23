hostelClient.controller('formCtrl',["$scope","$log","dbServices",function($scope,$log,dbServices){

	/**************************
		DECLARATIONS FOR FORM CONTROLLER
	**************************/
	
	// MODEL OBJECT FOR THE APPLICANT FORM 
    $scope.applicant = {
    
        regNo:"",
        name:"",
        semester:"",
        entryYear:"",
        religion:"",
        isCatholic:false,
        caste:"",
        bloodGroup:"",
        phNo:"",
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
    
	
	/**************************
		USER EVENTS
	**************************/
	
	// to POST APPLICATION TO DB
    $scope.postForm = function(){
        
		// general details
        var genDetails = {};
        genDetails.name = $scope.applicant.name;
        genDetails.regNo = $scope.applicant.regNo;
        genDetails.religion = $scope.applicant.religion;
        genDetails.phNo = $scope.applicant.phNo;
        
        console.log($scope.applicant);
        console.log(general);
        dbServices.post( "applicantList", $scope.applicant );
        dbServices.post( "generalList", general );
        
        if($scope.applicant.religion.toUpperCase() == "CHRISTIAN")
        {
			var chapel = {};
			chapel.name = $scope.applicant.name;
			chapel.regNo = $scope.applicant.regNo;

			var reader = {};
			reader.name = $scope.applicant.name;
			reader.regNo = $scope.applicant.regNo;
			reader.phNo = $scope.applicant.phNo;
            console.log("feewf");
            dbServices.post( "chapelList", chapel );
            dbServices.post( "readingList", reader );
        }
    }
}]);