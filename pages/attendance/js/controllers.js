calApp.controller("calCtrl", function($scope){
	
	$scope.calendar={
		months:[
			{ name:"January",dayCount:31 },
			{ name:"February",dayCount:28 },
			{ name:"March",dayCount:31 },
			{ name:"April",dayCount:30 },
			{ name:"May",dayCount:31 },
			{ name:"June",dayCount:30 },
			{ name:"July",dayCount:31 },
			{ name:"August",dayCount:31 },
			{ name:"September",dayCount:30 },
			{ name:"October",dayCount:31 },
			{ name:"November",dayCount:30 },
			{ name:"December",dayCount:31 }
		]
	};
	
	$scope.Day = function(d){
		this.date = d;
		this.absentees=[];
		this.events=[];
	};
	
	
	$scope.calendar.dayGen = function(d)
	{	
		var month = d.getMonth();
		
		var cal = this;
		cal.months[month].weeks = new Array();
		
		for(var week=0, day = 1; day<=this.months[month].dayCount; week++)
		{
			cal.months[month].weeks[week] = {};
			cal.months[month].weeks[week].days = new Array(); 
			
			while( d.getDay() <= 6 && day<=this.months[month].dayCount )
			{
				d.setDate(day);
				var newDate = new Date(d);
				cal.months[month].weeks[week].days[day]= new $scope.Day( d );	
				day++;
				
				if( d.getDay() == 6 )
					break;
			}
		}
	};
	
	var d = new Date();
	d.setDate(1);
	$scope.calendar.dayGen(d);
	
	$scope.month = $scope.calendar.months[d.getMonth()];
	console.log($scope.month);

});