// function clickingalertt(){
//     console.log("hello");
//     alert("hello");
// }   
 






let formm=document.getElementById("formm")

formm.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(event);

   let username= event.target[0].value;

   let pass=event.target[1].value;
   console.log(username, "", pass);

   let uservali=username.includes("@gmail.com",-1);
   let passvali=pass.match(/^[A-Z]/)
   console.log(passvali);
   



if(uservali)
{
    if(passvali==null){
        alert("enter a valid pass")
    }
    else if(pass.length!=6){
        alert("again enter a valid pass")
    }
    else{
        alert("success")
    
    }
}

    else{
        alert("enter proper mail")

    }

















})

