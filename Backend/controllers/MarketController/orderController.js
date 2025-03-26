const Order=require("../../models//MarketModel/orderModel.js");
const Product=require("../../models/MarketModel/productModel.js")

exports.newOrder=async(req,res,next)=>{
    const{
        orderItems,
        shippingInfo,
        itemPrice,
        shippingPrice,
        totalPrice,
        paymentInfo
    }=req.body;
    const order=await Order.create({
        orderItems,
        shippingInfo,
        itemPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt:Date.now(),
        user:req.user.id
    })
    for(let i=0;i<orderItems.length;i++){
        const orderItem=orderItems[i]
        const product=await Product.findById(orderItem.product)
        if(product){
            product.stock=product.stock-orderItem.quantity
            await product.save()
        }
    }
    res.status(200).json({
        success:true,
        order
    })
}
