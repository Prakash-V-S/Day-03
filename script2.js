//Task-03     02)Display all the contry flag in the console------------------
//XHR
var request = new XMLHttpRequest();
//API 
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].flag); 
        console.log(result[i].flags); // to disply flag name and flag image files in console
       
    }
}
