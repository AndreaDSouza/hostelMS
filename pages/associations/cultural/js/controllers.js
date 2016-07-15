calApp.controller('calCtrl', function($scope, dateService){
    
    /************************************
        App Calendar object definition 
    ************************************/
    
    /* Blank calendar object for all app calendar items */
    $scope.appCal = {};
    
    /* method for calendar object to generate */
    $scope.appCal.genCalendar = function()
    {
        /****************
        Declarations
        ****************/
        var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        var monthDays = [ 31,28,31,30,31,30,31,31,30,31,30,31 ];

        /****************
        Generate calendar for currentYear
        ****************/
        $scope.appCal.currentYear = {};
        $scope.appCal.currentYear.year = dateService.currentDate.year;
        $scope.appCal.currentYear.months = [];
        $scope.appCal.currentYear.genCalendar = function(){
            if( currentYear%4 == 0 )
            {
                monthDays[1] = 29;
            } else {
                monthDays[1] = 28;
            }
            for(var i=dateService.currentDate.month,j=0 ; i<=12; i++,j++ )
            {
                $scope.appCal.currentYear.months[j] = {};
                $scope.appCal.currentYear.months[j].name = months[i-1];   
                $scope.appCal.currentYear.months[j].days = monthDays[i-1];
            }    
        };
        $scope.appCal.currentYear.genCalendar();

        /****************
        Generate calendar for nextYear
        ****************/
        $scope.appCal.nextYear = {};
        $scope.appCal.nextYear.year = dateService.currentDate.year+1;
        $scope.appCal.nextYear.months = [];
        $scope.appCal.nextYear.genCalendar = function(){
            if( calendar.nextYear%4 == 0 )
            {
                monthDays[1] = 29;
            } else {
                monthDays[1] = 28;
            }
            for(var i=0; i<=4; i++ )
            {
                $scope.appCal.nextYear.months[i] = {};
                $scope.appCal.nextYear.months[i].name = months[i];   
                $scope.appCal.nextYear.months[i].days = monthDays[i];
            }    
        };
        $scope.appCal.nextYear.genCalendar();

        console.log($scope.appCal);
    };
    
    /**********************************************************
        Generate App cal after dataservice pulls date online 
    **********************************************************/
    dateService.pull( $scope.appCal.genCalendar );
    
    
    
});