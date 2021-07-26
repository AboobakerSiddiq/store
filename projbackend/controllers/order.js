const {Order,ProductCart}=require("../models/order")

exports.getOrderbyId=(req,res,next,id)=>{
    Order.findById(id)
    .populate("products.product","name price")
    .exec((err,order)=>{
        if(err){
            return res.status(400).json({
                error:"No Order Found in DB"
            })
        }
        req.order=order
        next()
    })
}
exports.createOrder=(req,res)=>{
    req.body.order.user=req.profile;
    const order=new Order(req.body.order);
    order.save((err,order)=>{
        if(err){
            return res.status(400).json({
                error:"Failed to create the order"
            })
        }
        res.json(order)
    })

}
exports.getAllOrders=(req,res)=>{
    Order.find()
        .populate("user","_id name")
        .exec((err,order)=>{
            if(err){
                return res.status(400).json({
                    error:"Can't gell all the orders"
                })
            }
            res.json(order)
        })
}

exports.getOrderStatus=(req,res)=>{
    res.json(Order.schema.path("status").enumValues);
}

exports.updateStatus=(req,res)=>{
    Order.update(
        {_id:req.body.orderId},
        {$set:{status:req.body.status}},
        (err,updatedOrder)=>{
            if(err){
                return res.status(400).json({
                    error:"Can't gell all the orders"
                })
            }
            res.json(updatedOrder)
        }
    )
}
