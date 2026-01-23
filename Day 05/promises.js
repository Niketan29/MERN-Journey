//1
const takePromise = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task Completed");
            resolve("Success")
        },2000)
    })
}

takePromise().then((res)=>{
    console.log(res)
})


//2
const takePromise1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task Completed");
            resolve("Success")
        },2000)
    })
}

takePromise1().then((res)=>{
    return res + " ✅"
}).then((res)=>{
    return res.toUpperCase();
}).then((res)=>{
    return res +" Done"
})


//3
const failedTaskPromise = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Something Failed")
        },1000)
    })
}

failedTaskPromise().catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Cleanup Done")
})