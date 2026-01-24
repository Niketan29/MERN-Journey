const healthRouter = (req,res)=>{
    res.status(200).json({
        status:"OK",
        uptime : process.uptime()
    })
}

module.exports= {healthRouter};