const errorMiddleware = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server problem"

    res.status(statusCode).json({
        success:false,
        message
    })
}


module.exports=errorMiddleware;