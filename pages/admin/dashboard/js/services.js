postEditApp.service("dbServices" , function(){

    var self = this;
    this.bUrl = "https://hostelms.firebaseio.com/";
	
	// to push application into DB
    this.push = function( subUrl, toPush )
    {
        var ref = new Firebase( self.bUrl + subUrl );
		
		// to - change from update to push
        ref.push(toPush);
		
		// to - add calback to success method
		//callback();
    };

});