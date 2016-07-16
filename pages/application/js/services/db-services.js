hostelClient.service("dbService" , function(){

    var self = this;
    this.bUrl = "https://hostelms.firebaseio.com/";
    this.post = function( subUrl, toPush )
    {
        var ref = new Firebase( self.bUrl );
        ref.child(obj.name);
        ref.update(toPush);
    };

});