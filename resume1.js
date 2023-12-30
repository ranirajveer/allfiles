// function clickingalert(){
//     console.log("ranierajveer");
//     alert("hellooo universe");
// }

// let button=document.getElementById("btn");
// btn.addEventListener('click',functiona(){
//     alert("chinniiii")
// })


function hello(){
    city="America9";
    apikey="643c9abe77b4c502e212b572933635b3";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
   .then(val=>val.json()).then(val=>console.log(val))
}