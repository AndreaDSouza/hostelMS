bioApp.controller("bioCtrl",["$scope", "dbServices", function($scope, dbServices){

    dbServices.get("applicantList", function(obj){
        $scope.$apply(function() {
            $scope.applicantList = obj;
			
			for( key in $scope.applicantList )
			{
				$scope.applicantList[key].alloted = "Allot";
			}
			
			getAllotedList();
		});
    });
	
	var getAllotedList = function()
	{
		dbServices.get("allotedList", function(obj){
            $scope.allotedList = obj;

            for( key in $scope.allotedList )
            {	
                if( $scope.applicantList[key] )
                {
                    $scope.applicantList[key].alloted = "Alloted";
                }
            }
		});
	}
   
    $scope.allotBtn = function( applicantKey, applicant ) {
        if( applicant.alloted == "Alloted" )
        {
            applicant.alloted = "Allot";
            
            dbServices.delete( "allotedList/" + applicantKey );
        }
        else
        {
            applicant.alloted = "Alloted";
            
            var toSet = {};
            toSet.alloted = "Alloted";
            
            console.log( toSet );
			dbServices.set( "allotedList/" + applicantKey , toSet );
            
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