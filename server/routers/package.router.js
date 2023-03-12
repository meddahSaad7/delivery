const express=require('express');
const router=express.Router();
const Package=require('../models/Package.model');
const validation = require("../middleware.js/validation");
const packageSchema = require("../validations/packageValidations");
const Excel = require("exceljs");
const csv=require('csvtojson')
const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const multer=require('multer')
const changeDate=(dates)=>{
  const dateString = dates;
  const date = new Date(dateString);
  return date.toISOString().slice(0, 10);
}
router.post(
  "/addPackage/:userToken",
  validation(packageSchema),
  async (req, res, next) => {
    let token
    jwt.verify(req.params.userToken,process.env.token,(err,decoder)=>{
      if(err){
        res.status(500).send(err)
      }else{
        token=decoder.user
      }
    })
    req.body.UserId=token
    try {
      const package = new Package(req.body);
      const newPackage = await package.save();
      res.status(200).send(newPackage);
    } catch (err) {
      console.log(err)
      res.status(404).send(err);
    }
  }
);
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'uploads/')
  },
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+Date.now()+'.csv')
  }
})
const upload=multer({storage:storage})
router.post('/importPackage/:userToken',upload.single('model'),async(req,res,next)=>{
  try{
    jwt.verify(req.params.userToken,process.env.token,(err,decoder)=>{
      if(err){
        res.status(400).send(err)
        console.log(err)
      }else{
        csv()
        .fromFile(req.file.path)
        .then((jsonObj)=>{
          jsonObj.map(obj=>{
            obj.ByImport=true
            obj.FileName=req.file.filename
            obj.UserId=decoder.user
            obj.Traking=shortid.generate().substring(0, 6)
            obj.HomeDelivery=Boolean(obj.HomeDelivery)
            obj.AgenceDelivery=Boolean(obj.AgenceDelivery)
            obj.PriceDelivery=Boolean(obj.PriceDelivery)
            obj.Wilaya=Number(obj.Wilaya)
            obj.Commune=Number(obj.Commune)
            obj.NumCommunde=Number(obj.NumCommunde)
            obj.PackagePrice=Number(obj.PackagePrice)
            obj.changeProduct=Boolean(obj.changeProduct)
            obj.freeDelivery=Boolean(obj.freeDelivery)
          })
          fs.writeFileSync(req.file.path,JSON.stringify(jsonObj, null, 4))
          const package=Package.create(jsonObj)
          res.status(200).send(package)
    })
      }
    });
  }catch(err){
    res.status(400).send(err)
    console.log(err)
  }
})
router.post('/getPackagesByFilter',async(req,res,next)=>{
  try{
    const package=await Package.find({ createdAt: { $gte: new Date(changeDate(req.body[0].startDate)), $lt: new Date(changeDate(req.body[0].endDate)) } });
    res.status(200).send(package)
  }catch(err){
    console.log(err)
    res.status(500).send(err)
  }
})
router.get('/getPackage/:id',async(req,res,next)=>{
  try{
    const package=await Package.findById(req.params.id)
    res.status(200).send(package)
  }catch(err){
    res.status(403).send(err)
  }
})
router.get('/getImports/:userToken',async(req,res,next)=>{
  let userId
  let filenames=[]
  try{
    jwt.verify(req.params.userToken,process.env.token,(err,decoder)=>{
      if(err){
        res.status(400).send(err)
      }else{
        userId=decoder.user
      }
    })
    // const packages=await Package.find({UserId:userId,ByImport:true}).select('FileName createdAt')
    const packages=await Package.aggregate(
      [
        { $match: { UserId: userId,ByImport:true }  },
        { $group: { _id: '$FileName',FileName: { $sum: '$UserId' } ,authorData: { $first: '$$ROOT' }  } }
      ]
    )
    res.status(200).send(packages)
  }catch(err){
    console.log(err)
    res.status(400).send(err)
  }
})
router.get('/EditStatus/:trak',async(req,res,next)=>{
  try{
    const package=await Package.findOneAndUpdate({Traking:req.params.trak},{$set:{Status:'Prêt à expédier'}})
    res.status(200).json(package)
  }catch(err){
    res.status(400).json(err)
    console.log(err)
  }
})
router.post('/getPackages/:skip/:token',async(req,res,next)=>{
  let myToken
    try{
      jwt.verify(req.params.token,process.env.token,(err,decoder)=>{
        if(err){
          console.log(err)
        }else{
          myToken=decoder.user
        }
      })
      if(req.body.length===0){
        const packages=await Package.find({UserId:myToken}).skip(req.params.skip).limit(7)
        res.status(200).send({data:packages,status:'byAll'});
      }else{
        const packages=await Package.find({UserId:myToken,createdAt: { $gte: new Date(changeDate(req.body[0].startDate)), $lt: new Date(changeDate(req.body[0].endDate)) } })
        res.status(200).send({data:packages,status:'byFilter'});
      }
    }catch(err){
        console.log(err)
        res.status(404).send(err)
    }
})

router.delete('/deletePackage/:packageId',async(req,res,next)=>{
  try{
    const package=await Package.findByIdAndDelete({_id:req.params.packageId})
    res.status(200).send(package)
  }catch(err){
    res.status(400).send(err)
  }
})
router.delete('/deleteImports/:fileName',async(req,res,next)=>{
  try{
    const package=await Package.deleteMany({FileName:req.params.fileName})
    res.status(200).send(package)
  }catch(err){
    res.status(400).send(package)
  }
})
router.get('/download/:fileName', (req, res) => {
  const filePath = `./uploads/${req.params.fileName}`;
  const file = fs.createReadStream(filePath);
  file.on('open', () => {
    res.setHeader('Content-Type', 'text/plain');
    file.pipe(res);
  });
  file.on('error', (error) => {
    console.error(error);
    res.status(500).send('An error occurred while downloading the file.');
  });
});
module.exports=router;