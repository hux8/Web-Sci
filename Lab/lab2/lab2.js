
var x = document.getElementById("resultData");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showWeather(position) {
	var lati = position.coords.latitude;
	var longi = position.coords.longitude;
	var callAPI = "http://api.openweathermap.org/data/2.5/weather?lat=" + lati +"&lon=" + longi +"&APPID=eec551a3788ea51493994e5edfb48781";
	$.getJSON(callAPI, function(json) {
	    $("#cityName").html(json.name);
		$('#icon').html('<img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png">');
		$('#weather').html("Description: "+json.weather[0].description);
		$('#temp').html("Temperature: "+Math.round(json.main.temp-273.15) + " Celsius");
		$('#wind').html("Wind Speed: "+json.wind.speed + "MPH");
		$('#humi').html("Humidity: "+json.main.humidity + "%");
	});
}

getLocation()