console.log("Start");
const myPromise = new Promise((resolve,reject)=>{
    success = true;
    setTimeout(()=>{
      if(success){
        resolve("Promise Successfull");
      }
      else{
        reject(new Error("Promise Rejected"))
      }
    },2000);
})
console.log("Ended");
myPromise.then((result)=>{
    console.log("Success",success);
})
myPromise.catch((error)=>{
    console.log("Success",error);
})