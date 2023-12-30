let a=[1,2,3,4,5]
let b=[22,33,44,...a]
console.log(b)
b[3]=342;
console.log(b)
function ar(a,b,c,d,...f){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(f)
}
ar(1,2,3,4,5,6,7,8)


let ad=[1,2,3,4,5]
let c=[1,2,3,...ad]
c[2]=123;
console.log(c)