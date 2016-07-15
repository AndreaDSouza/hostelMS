var calApp = angular.module('calApp',[]);


window.onload = function(){
    //change
    //getDate();
    //genCalendar();
}

//creates an empty object for calendar contents
var calendar = {};
var currentYear;
var currentMonth;
var currentDay;

//pull contents for current year
var getDate = function()
{   
    /****************
    Pull from internet
    ****************/
    //fill- pull from internet time
    currentYear = 2016;
    currentMonth = 7;
    currentDay = 12;
};

var genCalendar = function()
{
    /****************
    Declarations
    ****************/
    var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var monthDays = [ 31,28,31,30,31,30,31,31,30,31,30,31 ];
    
    /****************
    Generate calendar for currentYear
    ****************/
    calendar.currentYear = {};
    calendar.currentYear.year = currentYear;
    calendar.currentYear.months = [];
    calendar.currentYear.genCalendar = function(){
        if( currentYear%4 == 0 )
        {
            monthDays[1] = 29;
        } else {
            monthDays[1] = 28;
        }
        for(var i=currentMonth,j=0 ; i<=12; i++,j++ )
        {
            calendar.currentYear.months[j] = {};
            calendar.currentYear.months[j].name = months[i-1];   
            calendar.currentYear.months[j].days = monthDays[i-1];
        }    
    };
    calendar.currentYear.genCalendar();
    
    /****************
    Generate calendar for nextYear
    ****************/
    calendar.nextYear = {};
    calendar.nextYear.year = currentYear+1;
    calendar.nextYear.months = [];
    calendar.nextYear.genCalendar = function(){
        if( calendar.nextYear%4 == 0 )
        {
            monthDays[1] = 29;
        } else {
            monthDays[1] = 28;
        }
        for(var i=0; i<=4; i++ )
        {
            calendar.nextYear.months[i] = {};
            calendar.nextYear.months[i].name = months[i];   
            calendar.nextYear.months[i].days = monthDays[i];
        }    
    };
    calendar.nextYear.genCalendar();
    
    console.log(calendar);
};