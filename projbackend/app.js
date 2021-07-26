require('dotenv').config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser")
const cors=require("cors")
const authRoutes=require("./routes/auth.js")
const userRoutes=require("./routes/user.js")
const categoryRoutes=require("./routes/category.js")
const productRoutes=require("./routes/product.js")
const orderRoutes=require("./routes/order.js")
//DB CONNECTION
mongoose.connect(process.env.DATABASE,
{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true}).then(()=>{
    console.log("DB CONNECTED")
})


//MIDDLEWARE
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())

//MY ROUTES
app.use("/api",authRoutes)
app.use("/api",userRoutes)
app.use("/api",categoryRoutes)
app.use("/api",productRoutes)
app.use("/api",orderRoutes)


//PORTS
const port=process.env.PORT || 8000;


//CREATE SERVER
app.listen(port,()=>{
    console.log(`App is running on ${port}`)
})


