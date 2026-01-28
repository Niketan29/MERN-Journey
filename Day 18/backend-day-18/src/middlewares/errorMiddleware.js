const errorMiddleware = (err,req,res,next)=>{
    let statusCode = err.statusCode || 500
    let message = err.message || "Internal server problem"

    if(err.code === 11000){
        statusCode = 400;
        message = "Email already exists"
    }

    res.status(statusCode).json({
        success:false,
        message
    })
}


module.exports=errorMiddleware;