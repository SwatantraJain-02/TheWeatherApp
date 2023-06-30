const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2208842f39msha17036e7b6585b2p124a66jsn32381f7afb64',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function getWeather(city, flag) {
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
	try {
		await fetch(url + city, options)
			.then(response => response.json())
			.then((response) => {
				
				console.log(response);
				
				if (flag === 0){
					cityName.innerHTML = city;
					weatherOnCards(response);
				}

				else if (flag === 1) {
					var temp = document.querySelectorAll(".other-city");
					for(var i = 0; i < temp.length; i++){
		
						if(temp[i].innerText === city){
							
							weatherOfOtherCities(response, temp[i]);
						}
					}
					
				}

			});
	} catch (error) {
		console.error(error);
	}
}

function weatherOnCards(response) {
	// cloud_pct.innerHTML = response.cloud_pct;
	temp.innerHTML = response.temp;
	feels_like.innerHTML = response.feels_like;
	humidity.innerHTML = response.humidity;
	min_temp.innerHTML = response.min_temp;
	max_temp.innerHTML = response.max_temp;
	wind_speed.innerHTML = response.wind_speed;
	wind_degrees.innerHTML = response.wind_degrees;
	sunrise.innerHTML = response.sunrise;
	sunset.innerHTML = response.sunset;
}

function weatherOfOtherCities(response, otherCityName) {

	// Inserting Sunset
	var newElement = document.createElement("td");
	newElement.innerHTML = response.sunset;
	otherCityName.insertAdjacentElement("afterend", newElement);

	//Inserting Sunrise
	var newElement = document.createElement("td");
	newElement.innerHTML = response.sunrise;
	otherCityName.insertAdjacentElement("afterend", newElement);

	//Inserting Feels_like
	var newElement = document.createElement("td");
	newElement.innerHTML = response.feels_like;
	otherCityName.insertAdjacentElement("afterend", newElement);

	//Inserting Wind_degrees
	var newElement = document.createElement("td");
	newElement.innerHTML = response.wind_degrees;
	otherCityName.insertAdjacentElement("afterend", newElement);

	//inserting wind_speed
	var newElement = document.createElement("td");
	newElement.innerHTML = response.wind_speed;
	otherCityName.insertAdjacentElement("afterend", newElement);

	//inserting cloud_pct
	var newElement = document.createElement("td");
	newElement.innerHTML = response.cloud_pct;
	otherCityName.insertAdjacentElement("afterend", newElement);

	// inserting humidity
	var newElement = document.createElement("td");
	newElement.innerHTML = response.humidity;
	otherCityName.insertAdjacentElement("afterend", newElement);

	// inserting max temp
	var newElement = document.createElement("td");
	newElement.innerHTML = response.max_temp;
	otherCityName.insertAdjacentElement("afterend", newElement);

	// inserting min temp
	var newElement = document.createElement("td");
	newElement.innerHTML = response.min_temp;
	otherCityName.insertAdjacentElement("afterend", newElement);

	//Inserting temp

	var newElement = document.createElement("td");
	console.log(otherCityName[i]);
	newElement.innerHTML = response.temp;
	otherCityName.insertAdjacentElement("afterend", newElement);
}

var otherCities = document.querySelectorAll(".other-city");
for(var i = 0; i < otherCities.length; i++){
	getWeather(otherCities[i].innerText,1);
}

var search = document.querySelector("#search");
var city = document.querySelector("#city");
search.addEventListener("click", (e) => {

	getWeather(city.value, 0);
})

var numOfCommonCities = document.querySelectorAll(".dropdown-item").length;
for (var i = 0; i < numOfCommonCities; i++) {
	document.querySelectorAll(".dropdown-item")[i].addEventListener("click", function () {
		var commonCityName = this.innerHTML;
		getWeather(commonCityName, 0);
	})
}


getWeather("Delhi", 0);




