const mongoose=require('mongoose');

const PackageSchema = mongoose.Schema({
  FileName:{
    type:String,
    require:true,
    default:''
  },
  ByImport:{
    type:Boolean,
    require:true,
    default:false
  },
  UserId:{
    type:String,
    require:true
  },
  Traking:{
    type:String,
    require:true
  },
  Status:{
    type:String,
    default:'en préparation'
  },
  BuyerFirstName: {
    type: String,
    require: true,
  },
  BuyerLastName: {
    type: String,
    require: true,
  },
  BuyerPhone: {
    type: String,
    require: true,
  },
  HomeDelivery: {
    type: Boolean,
    require: true,
  },
  AgenceDelivery: {
    type: Boolean,
    require: true,
  },
  PriceDelivery: {
    type: Number,
    require: true,
  },
  Wilaya: {
    type: Number,
    require: true,
    ref:'wilaya'
  },
  AgenceWilaya:{
    type:String,
    require:true
  },
  Commune: {
    type: Number,
    require: true,
    ref:'Commune'
  },
  Agence: {
    type: String,
    require: true,
  },
  Adress: {
    type: String,
    require: true,
  },
  Products: {
    type: String,
    require: true,
  },
  NumCommunde: {
    type: Number,
    require: true,
  },
  PackagePrice: {
    type: Number,
    require: true,
  },
  changeProduct: {
    type: Boolean,
    require:true
  },
  freeDelivery: {
    type: Boolean,
    require:true
  },
  ProductsChanges: {
    type: String,
    require: true,
  },
},{
  timestamps:true
});
module.exports=mongoose.model('Package',PackageSchema)