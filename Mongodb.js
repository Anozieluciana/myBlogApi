const doCallBack = (callBack) =>{
    setTimeout(()=>{
        callBack([1,2,3],undefined)
    }, 5000)
}
console.log(undefined)

    doCallBack((error, result)=>{
        if(error){
           return console.log(error)
        }

        else{
            console.log(result)
        }
    })
