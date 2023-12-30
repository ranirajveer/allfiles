let a="chinni";
console.log(a);


var a1=10;
console.log(a1)

let a2=20;
let a3;

console.log(a2,a3)
let a4="ranirajveer";
console.log(a4,typeof a4);

let a5=23;
let a6=22;
console.log(a5>a6);

let mynum=null;
console.log(mynum) 


let b8=parseInt("123 rani");                                                                                        


console.log(b8,typeof b8);


// let arr=[1,2,3,4,5]
// arr.function(h);
// function. h(value,index,array)
// {
//     console.log(arr);
// }


// let arr=[1,2,3,4,5];
// let arr1=arr.filter(h);
// function.h(value,index,array){
//     return value>3
// }
// console.log(arr1);  



function greet(a,b){
    console.log(a,b)
}
greet(10) 


let age=()=>age*365
{
    console.log(age*2)
} 




// }(12); {function()
//     {
// console.log("jjjjjj");
// }


var x=22;
function bb(){
    // console.log(window);
    console.log(this.x);
}


let a9=[1,2,3,4,5,6];
let arr=a9.filter((value,index,array)=>{
    return value>3
})
console.log(arr);


let t=11;
let p=9;
t==p;
// console.log(p);
console.log(t+p);
console.log(t>p);

let i=1;
do{
    console.log(i);
    i++;
}
while(i<=8);

let o=20;
for(i=2;o[i]<=20;i++)
{
    if(o[i]%2==0){
    console.log(o[i]);
}
}

let d="mahadev";
let f="shivaling";
let result=d+f;
console.log(result);

let d1=`hello \t"world"`
console.log(d1);

let b3= parseInt("12345 hello");
console.log(b3,typeof(b3));


let f1=  123;
let f2=f1.toString()
console.log(f2,typeof(f2));

function greet(x){
    return 5+x;
}
greet();
console.log();

for(i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}

let p1={
    name:"rani",
    class:2,
    color:"dusky",
    laptop:{
        ram:25,
        color:"ash",
        brand:"hp"
    }
   
 
}
console.log( delete p1.laptop);
// console.log(p1.laptop);
// console.log(p1.laptop['color']);
console.log(p1.name);
console.log(p1['class']);

const sum =(c1,n1)=>c1+n1;
console.log(sum(2,3)); 


const greett=function(){
    console.log("hii");
}
greett() 

const add=(q,w)=>q+w;
console.log(add(2,1));


const greettt=function(){
    console.log("ll");
}
greettt()



