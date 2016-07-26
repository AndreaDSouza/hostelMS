bioApp.service("dbServices", function () {

    var self = this;
    this.bUrl = "https://hostelms.firebaseio.com/";
    
    this.get = function(subUrl , callBack)
    {
        var ref = new Firebase( self.bUrl + subUrl );
        ref.on("value", function( snapshot ){
        
            callBack(snapshot.val());
            
        });

    };
	
    this.push = function( subUrl, toPush )
    {
        var ref = new Firebase( self.bUrl + subUrl );
		
		// to - change from update to push
        ref.push(toPush);
		
		// to - add calback to success method
		//callback();
    };
	
    
    this.delete = function( subUrl)
    {
        var ref = new Firebase( self.bUrl + subUrl );
    };
    
});