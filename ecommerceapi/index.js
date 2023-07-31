const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/product");
const cartRoute=require("./routes/cart");
const orderRoute=require("./routes/order");
const cors = require("cors");
const stripeRoute = require("./routes/stripe");



const mongoose = require('mongoose');
const uri = process.env.MONGO_URL;
mongoose.set("strictQuery", false);
mongoose.connect(uri, { useNewUrlParser: true,
                      useUnifiedTopology: true,
}).then(()=>{
  console.log("DB connected");
}).catch((err) => console.log(err));



app.use(cors());
app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);










app.listen(process.env.PORT||5000 ,function(){
  console.log("server in 5000 running");
});
