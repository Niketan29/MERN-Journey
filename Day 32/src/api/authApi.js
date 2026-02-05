const loginApi = (email,password)=>{

    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(email === "n@gmail.com" && password === "12345678"){
                res({
                    token:"mock-jwt-token-123",
                    user:{
                        id:1,
                        email:email
                    },
                });
            }else{
                rej({
                    message:"Invalid Credentials"
                })
            }
        },1000)
    })

}

export default loginApi;