bioApp.controller("bioCtrl",["$scope","$timeout","dbServices", function($scope,$timeout,dbServices){

    dbServices.get("applicantList", function(obj){
        $timeout(function() {
            $scope.applicantList = obj ;
            console.log($scope.result);
		});
    });
	
	$scope.submitApplication = function(applicant){
		
		var general = {};
		general.name = applicant.name;
		general.regNo = applicant.regNo;
		general.phNo = applicant.phNo;
		general.religion = applicant.religion;
		
		dbServices.push("generalList",general);
		
		if(applicant.religion.toUpperCase() == "CHRISTIAN")
		{
			var chapel = {};
			chapel.name = applicant.name;
			general.regNo = applicant.regNo;
			general.phNo = applicant.phNo;
			chapel.isCatholic = applicant.isCatholic;
			
			dbServices.push("chapelList",chapel);
		}
	}
}])