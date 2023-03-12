const validation=(schema)=>async(req,res,next)=>{
    const body=req.body;
    try{
        await schema.validate(body,{abortEarly:false})
        return next();
    }catch(err){
        return res.status(200).send(err.errors);
    }
}
module.exports=validation