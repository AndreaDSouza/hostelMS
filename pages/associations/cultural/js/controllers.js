// to - change $http to firebase 
calApp.controller('calCtrl', function($scope, dateService, $http){
    
    
    /************************************************
        Get events list
    ************************************************/
    
    
        // resulting object that will store all events from DB
        var fromDB = {};
        
        // to - use service later to fetch from firebase
        $http({
            method: 'GET',
            url: 'eventsListFormat.json'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            
            fromDB = response;
                
            /** dataservice using callback since it's asynchronous  **/
            dateService.pull( genCal );
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    
    
    /************************************
        App Calendar object definition 
    ************************************/
    
    
        // Initialisation of statics
        var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        var monthDays = [ 31,28,31,30,31,30,31,31,30,31,30,31 ];

        // Declaration of Calendar array
        $scope.appCal = {};

        // to generate app Calendar object
        var genCal = function() {

            // initial year and month app has to generate from
            var startingYear = dateService.currentDate.getFullYear();
            var startingMonth = dateService.currentDate.getMonth();

            // for 2 years
            for( var y=0; y<=1; y++ )
            {   
                $scope.appCal[startingYear] = {};
                $scope.appCal[startingYear].id = y;
                $scope.appCal[startingYear].string = startingYear;
                $scope.appCal[startingYear].months = {};

                // from starting month
                for( var m=0; m<=11-startingMonth; m++ )
                {
                    $scope.appCal[startingYear].months[startingMonth+m] = {};
                    $scope.appCal[startingYear].months[startingMonth+m].id = m;
                    $scope.appCal[startingYear].months[startingMonth+m].string = months[ startingMonth+m ];   
                    $scope.appCal[startingYear].months[startingMonth+m].days = {};

                    // for days of the month
                    for( var d=0; d<monthDays[ startingMonth+m ]; d++ )
                    {
                        $scope.appCal[startingYear].months[startingMonth+m].days[d+1] = {};
                        $scope.appCal[startingYear].months[startingMonth+m].days[d+1].id = d;
                        $scope.appCal[startingYear].months[startingMonth+m].days[d+1].string = d+1;
                        // creates a corresponding Date object for each day to be used later for adding events
                        $scope.appCal[startingYear].months[startingMonth+m].days[d+1].date = new Date( startingYear, startingMonth+m, d+1 );
                        $scope.appCal[startingYear].months[startingMonth+m].days[d+1].events = [];
                    }
                }

                // reinitialise for next year and first month 
                startingYear++;
                startingMonth = 0;

            }
            
            
            // assign all events from eventsList taken from server to scope
            eventstoCal();

        };

    
    /************************************************
        Assign events from events list to calendar object
    ************************************************/
    
        var eventstoCal = function(){
            
            // for every event in the object fromDB
            for( event in fromDB.data.events )
            {   
                // for every day this event is attached to
                for( day in fromDB.data.events[event].days )
                {
                    // find the corresponding date from date object
                    var eventDate = new Date( fromDB.data.days[day].date.toString() );
                    
                    // attach to scope :))
                    $scope.appCal[eventDate.getFullYear()].months[eventDate.getMonth()].days[eventDate.getDate()].events.push(fromDB.data.events[event]);
                }
            }
            
        };
    
    
    /************************************************
        Create fields for new events
    ************************************************/
    
        $scope.addEvent = function(day){
        
            // push a blank event for the date
            day.events.push(
                {
                    title : "title",
                    desc : "Desc",
                    type : "Type"
                }
            );
            
        };
    
    
    /************************************************
        when an event is being changed
    ************************************************/
    
        $scope.isEventEmpty = function( eventsArray, event ){
            console.log("changing");
            if( event.title === '' || event.desc === '' || event.type === '' )
            {
                console.log("empty");
                return true;
            }
            return false;
        };
    
});