const express=require('express')
const router=express.Router()
const Wilaya=require('../models/Wilaya.model');
const Commune=require('../models/Commune.model')
const Agence=require('../models/Agence.model')
router.get('/wilayas',async(req,res,next)=>{
    
    try{
        const wilayas=await Wilaya.find({}).populate({path:'agences'})
        res.status(200).send(wilayas);
    }catch(err){
        res.status(404).send(err)
    }
})
router.get('/wilaya/:id',async(req,res,next)=>{
    try{
        const wilaya=await Wilaya.findOne({id:req.params.id})
        res.status(200).send(wilaya)
    }catch(err){
        res.status(404).send(err)
    }
})
router.get('/communes/:wilayaId',async(req,res,next)=>{
    try{
        const Communes = await Commune.find({ wilaya_id :req.params.wilayaId });
        res.status(200).send(Communes)
    }catch(err){
        res.status(404).send(err)
    }
})

router.post('/agence',async(req,res,next)=>{
    try{
        const newAgence=new Agence(req.body)
        const agence=await newAgence.save();
        const updateWilaya=await Wilaya.findOneAndUpdate({_id:agence.wilayaId},{ $push: { agences: agence._id } })
        res.status(200).send(agence)
    }catch(err){
        res.status(404).send(err)
    }
})
router.get('/agence/:communeId',async(req,res,next)=>{
    try{
        const agences=await Agence.find({communeId:req.params.communeId})
        res.status(200).send(agences)
    }catch(err){
        res.status(404).send(err)
    }
})
module.exports=router;