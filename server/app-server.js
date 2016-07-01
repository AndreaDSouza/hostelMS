var applicants;

function getDetails()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            applicants = JSON.parse(xhttp.responseText);
            generateOnLoad();
        }
    }
    xhttp.open("GET","js/tableDetails.json",true);
    xhttp.send();
}


window.onload = function(){
    getDetails();
};