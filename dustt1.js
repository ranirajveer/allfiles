document.getElementById("form")
.addEventListener("submit",function(event){
    function a(city,apikey="643c9abe77b4c502e212b572933635b3")
    {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).then(a=>a.json()).then(data=>{
            console.log(data);
            let temperature=data.main.temperature;
            let humidity=data.main.humidity;
            let windspeed=data.main.windspeed;



            document.getElementById('temperature').innerHTML=temperature+"c";
            document.getElementById('humidity').innerHTML=humidity+"%";
            document.getElementById('windspeed').innerHTML=windspeed+"km/h";
                



            event.preventDefault();
            getWeather();
        })
    }
})