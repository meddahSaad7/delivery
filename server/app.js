const express=require('express')
const app=express();
const morgan=require('morgan')
const mongoose=require('mongoose')
const body_parser=require('body-parser');
const DB_URL="mongodb://localhost:27017/deliveryProject"
const AuthRouter=require('./routers/Auth.router');
const AdminAuthRouter=require('./routers/AdminAuth.router')
const LocationRouter=require('./routers/Location.router');
const PackageRouter=require('./routers/package.router');
const cookieParser=require('cookie-parser')
const cors=require('cors')
require("dotenv").config();
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(cookieParser())
mongoose.connect(DB_URL).then(()=>{
  console.log('data base connected...')
});
app.use(
  cors({
    credentials: true,
    origin: "http://192.168.0.181:3000",
  })
);
app.use('/server/auth',AuthRouter);
app.use('/server/admin/auth',AdminAuthRouter)
app.use("/server/location", LocationRouter);
app.use("/server/package", PackageRouter);
app.use(morgan('tiny'));
app.listen(3001,()=>{
  console.log('server listen in port 3001...')
})
