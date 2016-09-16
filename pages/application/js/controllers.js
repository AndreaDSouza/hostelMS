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
			phNo:"",										
            father:
            {
                name:"",
                occupation:"",
                email:""
            },
            mother:
            {
                name:"",
                occupation:"",
                email:""
            },
            guardian:
            {
                name:"",
                occupation:"",
                email:"",
                address:"",
                city:"",
                state:"",
                phNo:""
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