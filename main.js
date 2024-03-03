// function hello(){
//     console.log("Hello Hifza")
// }
// let a = "hello"
// function world(callback:any){
//     callback()
// }
// world(a)
// // callback function 
// jb bhi hum async use krty hn te is ke ander ek function banaty hn 
// function ka km hi asunc ke function pr work kr na hn.
// function hello(name : string){
//     console.log(name)
// }
// let a = "hello"
// function world(x:string,callback:any){
// // arguments ke ander functions ko callback kr wa ty hn.....
//     callback(x)
// }
// world("Hello hareem",hello)                 // ya arguments hn
// async  ( async multi task krta hn just like waiter)
// console.log("first")
// function printsecond(){
//     console.log()
// }
// setTimeout(()=>console.log("second"),0)
// setTimeout(()=>{
//     console.log("third")
// },1000)
// for (let i=0; i<100; i++){
//     // console.log("hi")
// }
// console.log("forth")
// setTimeout(()=>console.log("fifth"),3000)
// Promise
var myPromise = new Promise(function (resolve, reject) {
    console.log("promise pending....");
    setTimeout(function () {
        console.log("status resolve....");
        resolve(["hiba", "hareem"]);
        reject("data fetch error...");
    }, 2000);
});
myPromise
    .then(function (res) { return (console.log(res)); })
    .catch(function (err) { return (console.log(err)); });
