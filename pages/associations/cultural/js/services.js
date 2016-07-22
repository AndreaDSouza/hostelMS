calApp.service( 'dateService', function( $http ){

    var self = this;
    //object that will store current date
    this.currentDate = new Date();
    
    //AJAX call to get current date
    this.pull = function( callback ){
        
        //to fix
        /*
        $http.get( 'http://www.timeapi.org/utc/now' )
            .success( function( result ){
                console.log( result );
        })
            .error( function(data, status){
                console.log( data + '' + status );
        });*/
        
        self.currentDate.setDate(15);
        self.currentDate.setMonth(5);
        self.currentDate.setFullYear(2016);
        
        callback();
    };
    
});

calApp.service( 'DBService', function(){   
    
});