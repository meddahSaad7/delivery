const mongoose=require('mongoose');
const AgenceSchema=mongoose.Schema({
    communeId:{
        type:String,
        require:true,
        ref:'Commune'
    },
    name:{
        type:String,
        require:true
    },
    wilayaId:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    stopDeskId:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("agence",AgenceSchema)