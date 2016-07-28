bioApp.controller("bioCtrl",["$scope", "dbServices", function($scope, dbServices){

    dbServices.get("applicantList", function(obj){
        $scope.$apply(function() {
            $scope.applicantList = obj;
			console.log( $scope.applicantList );
			
			for( key in $scope.applicantList )
			{
				$scope.applicantList[key].alloted = "Allot";
			}
			
			//getAllotedList();
		});
    });
	
	var getAllotedList = function()
	{
		dbServices.get("allotedList", function(obj){
			$scope.$apply(function() {
				$scope.allotedList = obj;
				console.log( $scope.applicantList );
				
				for( key in $scope.allotedList )
				{	
					if( $scope.applicantList[key] )
					{
						$scope.applicantList[key].alloted = "Alloted";
					}
				}
			});
		});
	}
   
    $scope.allotBtn = function(Key) {
        if( $scope.applicantList[key].alloted == "Alloted" )
        {
            $scope.applicantList[key].alloted == "Allot"
        }
        else if( $scope.applicantList[key].alloted == "Allot" )
        {
            $scope.applicantList[key].alloted == "Alloted";
			
			/*
            var general = {};
            general.name = applicant.name;
            general.regNo = applicant.regNo;
            general.phNo = applicant.phNo;
            general.religion = applicant.religion;

            if(applicant.religion.toUpperCase() == "CHRISTIAN")
            {
				
                var chapel = {};
                chapel.name = applicant.name;
                chapel.regNo = applicant.regNo;
                chapel.phNo = applicant.phNo;
                chapel.isCatholic = applicant.isCatholic;
            }
			*/
        }
  	};  
}]);