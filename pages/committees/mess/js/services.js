messApp.service("dbServices", function () {

    var self = this;
    this.bUrl = "https://hostelms.firebaseio.com";
    
    this.get = function(subUrl , callBack)
    {
        var ref = new Firebase( self.bUrl + subUrl );
        ref.on("value", function( snapshot ){
        
            callBack(snapshot.val());
            
        });

    };
	
	this.update = function( subUrl, obj, callBack )
	{
		var ref = new Firebase( self.bUrl + subUrl );
        ref.update( obj );
		callBack();
	}
});
    