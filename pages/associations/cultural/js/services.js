calApp.service( 'dateService', function(){

    var self = this;
    this.currentDate = {};
    
    //AJAX call
    this.pull = function( callback ){
        //fill
        self.currentDate.year = 2016;
        self.currentDate.month = 7;
        self.currentDate.day = 14;
        
        callback();
    };
    
});

calApp.service( 'DBService', function(){   
    
});