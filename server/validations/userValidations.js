const yup = require('yup')
const userSchema=yup.object({
    // firstName:yup.string().min(4,'please make this bigger').max(20).required(),
    // lastName:yup.string().min(4, 'please make this bigger').max(20).required(),
    email:yup.string().email().required(),
    password:yup.string().min(8,'please make this bigger').max(20).required(),
    // phoneNumber:yup.string().min(10,'please make this bigger').max(20).required()
})
module.exports=userSchema;