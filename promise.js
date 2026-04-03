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
console.log("start");
function promise(){
  return new Promise((resolve,reject)=>{
    let isDisolay = false;
    resolve(()=>{
      setTimeout(()=>{
        if(!isDisolay){
          resolve("Resolve")
        }
        else{
          reject(new Error("reject"))
        }
      })
    })
  })
}

promise().then(()=>{
  console.log("Resolve");
}).catch(()=>{
  console.log("reject");
})
console.log("end");
function getnum(n,delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n % 2 === 0) {
        resolve(n * n);
      } else {
        reject("odd");
      }
    }, delay);
  });
  return promise
}

async function getData(){
  const  res = await getnum(4,1000);
  console.log(res);
  const res2 = await getnum(res);
  console.log(res2);
}
getData()
