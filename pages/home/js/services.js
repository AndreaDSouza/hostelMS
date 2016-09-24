/***************************************
    Session Service
***************************************/

myApp.service('sessionService', function( $cookies, $location ){

    this.user = new Object();
    this.checkSession = function(){
        this.user.name = $cookies.get('userName');
        if( this.user.name )
        {
            return true;
        } else {
            return false;
        }
    }
    this.createSession = function( user ){
        this.user.name = user.name;
        this.user.type = user.type;
        $cookies.put('userName', this.user.name );
        $cookies.put('userType', this.user.type );
        $location.url('/dashboard');
    }

});

/***************************************
    Database Service
***************************************/

myApp.service("dbService", function () {

    var self = this;
    this.bUrl = "https://hostelms.firebaseio.com";

    this.get = function(subUrl, callBack)
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

})

/***************************************
    Route Configuration
***************************************/

myApp.config( function( $routeProvider ) {

    $routeProvider

    .when( '/' , {
        templateUrl : 'pages/home/home.html',
        controller : "home"
    })

});
