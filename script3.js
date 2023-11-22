//task-03  03) print all countrie names,regions,sun regionsand populations from Api

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    for (let i = 0; i < result.length; i++) {
        console.log("Country Name : " + result[i].name.official);
        console.log("Region : " + result[i].region);
        console.log("Subregion : " + result[i].subregion);
        console.log("Population : " + result[i].population)
        console.log("")// show seperatly
    }
}
