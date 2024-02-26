

let secureApi = (req,res,next)=>{
    console.log(req.headers.authorization);
    if(req.headers.authorization == "nodejs"){
        next()
    }else{
        res.send("No Api Found !! URL Wrong")
    }

}

module.exports= secureApi;