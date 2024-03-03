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

let myPromise = new Promise((resolve,reject)=>{
    console.log("promise pending....")

    setTimeout(()=>{
        let data =["hiba","hareem"]

        if(data){
            console.log("promise resolve...")
            resolve(data)
        } else{
            console.log("promise rejectes...")
            reject("data fetch error")
        }
    // console.log("status resolve....")
    // resolve(["hiba","hareem"])
    // reject("data fetch error...")
    },2000)
})


myPromise
.then((res)=>(console.log(res)))
.catch((err)=>(console.log(err)))