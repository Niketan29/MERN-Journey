const errorHandler = (err,req,res,next)=>{
    let statusCode = err.statusCode || 500;
    let message = err.message || "Tnternal server problem"

    if(err.code === 11000){
        statusCode = 400;
        message:"Email already registered"
    }

    res.status(statusCode).json({
        success:false,
        message
    })
}

module.exports=errorHandler;