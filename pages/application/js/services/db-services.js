hostelClient.service("dbServices" , function(){

    var self = this;
    this.bUrl = "https://hostelms.firebaseio.com/";
    this.post = function( subUrl, toPush )
    {
        console.log(self.bUrl + subUrl)
        var ref = new Firebase( self.bUrl + subUrl );
        ref.child(toPush.regNo).update(toPush);
    };

});