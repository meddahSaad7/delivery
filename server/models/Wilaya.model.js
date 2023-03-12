const mongoose=require('mongoose');
const WilayaSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  ar_name: {
    type: String,
    require: true,
  },
  longitude: {
    type: String,
    require: true,
  },
  latitude: {
    type: String,
    require: true,
  },
  homeDeliveryPrice:{
    type:String,
    require:true
  },
  agenceDeliveryPrice:{
    type:String,
    requrie:true
  },
  agences:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'agence'
      }
    ]
});
module.exports=mongoose.model('Wilaya',WilayaSchema)