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
        console.log("pushing..." + toPush + " to " + subUrl);
        var ref = new Firebase( self.bUrl + subUrl );
        ref.push(toPush);
    };
    
    this.set = function( subUrl, toSet )
    {
        console.log("setting..." + toSet + " in " + subUrl);
        var ref = new Firebase( self.bUrl + subUrl );
        ref.set(toSet);
    };
	
    
    this.delete = function( subUrl)
    {
        console.log("deleting...at..." + subUrl);
        var ref = new Firebase( self.bUrl + subUrl );
        ref.remove();
    };
    
});