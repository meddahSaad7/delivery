const yup=require('yup');
const packageSchema = yup.object({
  BuyerFirstName: yup.string().required(),
  BuyerLastName: yup.string().required(),
  BuyerPhone: yup.string().required(),
  HomeDelivery: yup.boolean().required(),
  AgenceDelivery: yup.boolean().required(),
  PriceDelivery: yup.number().required(),
  Wilaya: yup.number().min(1).required(),
  Commune: yup.number().min(1).required(),
  Agence: yup.string().when("AgenceDelivery", {
    is: true,
    then: yup.string().required(),
  }),
  Adress: yup.string().when("HomeDelivery", {
    is: true,
    then: yup.string().required(),
  }),
  Products: yup.string().required(),
  NumCommunde: yup.number().min(1).required(),
  PackagePrice: yup.number().min(1).required(),
  changeProduct: yup.boolean().required(),
  freeDelivery: yup.boolean().required(),
  ProductsChanges: yup.string().required(),
});
module.exports=packageSchema;