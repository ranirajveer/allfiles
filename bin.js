// let a="chinni";
// console.log(a);


// var a1=10;
// console.log(a1)

// let a2=20;
// let a3;

// console.log(a2,a3)
// let a4="ranirajveer";
// console.log(a4,typeof a4);

// let a5=23;
// let a6=22;
// console.log(a5>a6);

// let mynum=null;
// console.log(mynum) 


// let b8=parseInt("123 rani");                                                                                        


// console.log(b8,typeof b8);


// // let arr=[1,2,3,4,5]
// // arr.function(h);
// // function. h(value,index,array)
// // {
// //     console.log(arr);
// // }


// // let arr=[1,2,3,4,5];
// // let arr1=arr.filter(h);
// // function.h(value,index,array){
// //     return value>3
// // }
// // console.log(arr1);  



// function greet(a,b){
//     console.log(a,b)
// }
// greet(10) 


// let age=()=>age*365
// {
//     console.log(age*2)
// } 




// // }(12); {function()
// //     {
// // console.log("jjjjjj");
// // }


// var x=22;
// function bb(){
//     // console.log(window);
//     console.log(this.x);
// }


// let a9=[1,2,3,4,5,6];
// let arr=a9.filter((value,index,array)=>{
//     return value>3
// })
// console.log(arr);


// let t=11;
// let p=9;
// t==p;
// // console.log(p);
// console.log(t+p);
// console.log(t>p);

// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=8);

// let o=20;
// for(i=2;o[i]<=20;i++)
// {
//     if(o[i]%2==0){
//     console.log(o[i]);
// }
// }

// let d="mahadev";
// let f="shivaling";
// let result=d+f;
// console.log(result);

// let d1=`hello \t"world"`
// console.log(d1);

// let b3= parseInt("12345 hello");
// console.log(b3,typeof(b3));


// let f1=  123;
// let f2=f1.toString()
// console.log(f2,typeof(f2));

// function greet(x){
//     return 5+x;
// }
// greet();
// console.log();

// for(i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// let p1={
//     name:"rani",
//     class:2,
//     color:"dusky",
//     laptop:{
//         ram:25,
//         color:"ash",
//         brand:"hp"
//     }
   
 
// }
// console.log( delete p1.laptop);
// // console.log(p1.laptop);
// // console.log(p1.laptop['color']);
// console.log(p1.name);
// console.log(p1['class']);

// const sum =(c1,n1)=>c1+n1;
// console.log(sum(2,3)); 


// const greett=function(){
//     console.log("hii");
// }
// greett() 

// const add=(q,w)=>q+w;
// console.log(add(2,1));


// const greettt=function(){
//     console.log("ll");
// }
// greettt()




// class g{
//     constructor(){
//         this.name="rani";
//         this.age=20;
//         // console.log(this)
//     }
// }
// let obj=new g();
// console.log(obj.name);


// function outerFunction(){
//     let a=10;

// function innerFunction(){
//     let b=20;
//     console.log(a+b);
// }
// return innerFunction();
// }
// let closure=outerFunction();
// closure;  


// let h=[1,2,3,4,5,6,7,8];
// let g1=[...h];
// g1[3]=33;
// console.log(g1) 

// let t={s:"apple",s1:"banana"};
// let b={...t}
// console.log(b);


// function r(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     // console.log(d)
//     // console.log(e)
// }
// r(1,2,3,4,5,6);


// let a=[11,22,33,44,55];
// let b4=[...a];
// console.log(b4);



// function t2(a1,b1,c1,...d1){
//     console.log(a1);
//     console.log(b1);
//     console.log(c1);
// }
// t2(11,22,33,44,55,66)

// let a6=[1,2,3,4,5];
// let b6=new Set(a6);
// console.log(...b6)
// let a9=new Set()
// a9.add="hello";
// // a9.add="world";k
// console.log(a9) 



// let a=[1,2,3,4,5];
// let b=a.filter((val,ind,arr)=>{
//     return val>1
// })
// console.log(b)


// let a=[1,2,3,4,5];
// let b=(val,ind,arr)=>{
//     return val>1
// }
// let c=a.filter(b)
// console.log(c) 




// console.log("hello")
// let a=()=>{
//     console.log("world")
// }
// setTimeout(a,3000);
// console.log("hi")


// let a=[1,2,3,4,5];
// a[33]=44;
// console.log(a)

// let a=[1,2,3,4,5];
// console.log(a.shift(1));
// console.log(a)  

// let a=[1,2,3,4,5];
// a.forEach(h);
// function h(value,index,array)
// console.log(a);

let b=[1,2,3,4,5];
let b1=b.map(b);
console.log(b1)
function h(value,index,array){
    return value*2
}