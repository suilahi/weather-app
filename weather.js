const apiKey = "d7e0b70e2f8ab2f0c95403b0e2394cb2";
// const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?&appid=&units=metric&q=bangalore";



const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=Casablanca&appid=${apiKey}`;

async function checkWeather() {
    const response =await fetch(apiUrl);
    var data = await response.json();
  
    console.log(data);
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temperat").innerHTML = tempInCelsius.toFixed(2) +"°C";   
    document.getElementById("windspeed").innerHTML = data.wind.speed;
    document.getElementById("humidity").innerHTML = data.main.humidity;





}
checkWeather();
