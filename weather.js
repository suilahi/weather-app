const apiKey = "d7e0b70e2f8ab2f0c95403b0e2394cb2";
// const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?&appid=&units=metric&q=bangalore";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")
 
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data.weather)
    const iconLink = ` https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.getElementById("weatherIcon").src = iconLink
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("pressure").innerHTML = data.main.pressure + "mbar";
    document.getElementById("temperat").innerHTML = data.main.temp + "°C";
    document.getElementById("temp_min").innerHTML = data.main.temp_min + "°C";
    document.getElementById("temp_max").innerHTML = data.main.temp_max + "°C";
    document.getElementById("windspeed").innerHTML = data.wind.speed + "km/h";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
