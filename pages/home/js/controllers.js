//LOGIN FROM CONTROLLER
myApp.controller('home', function( $scope, $location, $timeout, $http, sessionService, dbService ){

    /**************************************************
        Login Box
    **************************************************/

    //if any user is logged in..
    if( sessionService.checkSession() )
    {
        $location.url('/dashboard');
    }
    //otherwise..

    $scope.user = new Object;
    $scope.user.foundUserName = false;
    $scope.user.foundPassword = false;

    var users;

    $scope.user.checkUserName = function(){
        $http({
            method : "GET",
            url : "/users.json"
        }).then(function mySucces(response) {
            users = response.data;
            if( users[$scope.user.name] ){
                $scope.user.foundUserName = true;
            } else {
            }
        });
    };

    $scope.user.checkPassword = function(){

        if( users[$scope.user.name].password == $scope.user.password ){
            $scope.user.foundPassword = true;
            $timeout( function(){
                $scope.user.type = users[$scope.user.name].type;
                sessionService.createSession( $scope.user );
            },1000);
        } else {
        }

    };

    /**************************************************
        Announcement Box
    **************************************************/

    dbService.get('/announcements', function( data ){
        $timeout( function(){
            $scope.items = data;
        },0);
    });


});
