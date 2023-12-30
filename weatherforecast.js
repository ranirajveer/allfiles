
document.getElementById("form").addEventListener("submit", function getWeather(event) {
  event.preventDefault();
  console.log(event);
  var a = document.getElementById("input").value
  console.log(a);
  Weather(a)
  function Weather(city) {
    apikey = "643c9abe77b4c502e212b572933635b3";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
      .then(response => response.json()).then(data => {
        console.log(data);
        let temperature = data.main.temp;
        let humidity = data.main.humidity;
        let windspeed = data.wind.speed;
        console.log(data.main.temp)
        document.getElementById('temperature').innerHTML = temperature + "c";
        document.getElementById('humidity').innerHTML = humidity + "%";
        document.getElementById('windspeed').innerHTML = windspeed + "km/h";
      })
  }
})







