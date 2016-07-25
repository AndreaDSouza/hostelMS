hostelClient.controller('formCtrl',["$scope","$log","dbServices",function($scope,$log,dbServices){

	/**************************
		DECLARATIONS FOR FORM CONTROLLER
	**************************/
	
	// MODEL OBJECT FOR THE APPLICANT FORM 
    $scope.applicant = {
    
		toRemove:false;
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
		FORM VALIDATION
	**************************/
	
	// to - validate the form
	
	/**************************
		USER EVENTS
	**************************/
	
	// to POST APPLICATION TO DB
    $scope.postForm = function( ){
        
		// to - remove
		console.log( $scope.applicant );
		
		// PUSH FORM TO DB
		// to - add callback
        dbServices.push( "applicantList", $scope.applicant);
						//, function(){
		//	console.log("posted");
		//});
     }
}]);