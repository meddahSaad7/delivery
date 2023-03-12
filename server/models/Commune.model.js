const mongoose=require('mongoose');
const CommuneSchema = mongoose.Schema({
  id: { type: String, require: true },
  post_code: { type: String, require: true },
  name: { type: String, require: true },
  wilaya_id: { type: String, require: true },
  ar_name: { type: String, require: true },
  longitude: { type: String, require: true },
  latitude: { type: String, require: true },
});
module.exports=mongoose.model('Commune',CommuneSchema)