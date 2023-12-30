function clickingalertt(){
    console.log("hello");
    alert("hello");
}   

/event2/ 






let formm=document.getElementById("formm")

formm.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(event)

   let username= event.target[0].value;
   let pass=event.target[1].value;
   console.log(username, "", pass);


   let passvali=pass.match(/[A-Z]/);
   console.log(passvali);



})

let uservali=username.match(/[(@gmail.com)$]/);
console.log(uservali);

// let passvali=pass.match(/^[A-Z]/);
// console.log(passvali)