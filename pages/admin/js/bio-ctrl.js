bioApp.controller("bioCtrl",["$scope","$timeout","dbServices", function($scope,$timeout,dbServices){

    dbServices.get("applicantList", function(obj){
        $timeout(function() {
            $scope.applicantList = obj;
		});
    });
    
    $scope.isActive = false;
    $scope.display = "Allot";
   
    $scope.activeButton = function(applicant) {
        if(this.isActive === true)
        {
            this.display = "Allot";
            dbServices.delete("generalList");
        }
        else if(this.isActive === false)
        {
            this.display = "Allotted";
            var general = {};
            general.name = applicant.name;
            general.regNo = applicant.regNo;
            general.phNo = applicant.phNo;
            general.religion = applicant.religion;

            dbServices.push("generalList", general);

            if(applicant.religion.toUpperCase() == "CHRISTIAN")
            {
                var chapel = {};
                chapel.name = applicant.name;
                chapel.regNo = applicant.regNo;
                chapel.phNo = applicant.phNo;
                chapel.isCatholic = applicant.isCatholic;

                dbServices.push("chapelList", chapel);
            }
        }
        this.isActive = !this.isActive;
  };  
}]);