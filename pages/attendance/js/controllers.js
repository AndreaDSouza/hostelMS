calApp.controller("calCtrl",function($scope,$dbServices){
	$scope.cal=calendar; 
	console.log(calendar);
});
var day = function(){
	
	this.absentees=[];
	this.events=[];

};

var calendar = {
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

calendar.dayGen = function(month)
{
	this.months[month].days=[]; 
	for(var i=1; i<this.months[month].dayCount; i++)
	{
		this.months[month].days[i]= new day();
	}
}