const mongoose = require('mongoose');
const {Schema}= mongoose;

main().then(()=>{
    console.log("Connection successful.....");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//order information
const orderSchema= new mongoose.Schema({
    item: String,
    price: Number
})
const Order= new mongoose.model("Order", orderSchema);

//customer information
const CustomerSchema= new mongoose.Schema(
    {
        username: String,
        orders: [{
            type: Schema.Types.ObjectId,
            ref: "Order"
        }]
    }
);

const Customer= new mongoose.model("Customer", CustomerSchema);

CustomerSchema.post("findOneAndDelete", async(Customer)=>{
    if(Customer.orders.length){
        await Order.deleteMany({_id: {$in: Customer.orders}});
    }
    console.log("Post is triggered")
})

// const adding= async()=>{
//     let customer= await Customer.findOne({username: "Mahisha"})

//     let order1= await Order.findOne({item: "pani puri"});
//     let order2= await Order.findOne({item: "Pizza"});
//     let order3= await Order.findOne({item: "Pav Bhaji"});
//     // let order= new Order({
//     //     item: "pani puri",
//     //     price: 20
//     // })
//     customer.orders.push(order1);
//     customer.orders.push(order2);
//     customer.orders.push(order3);

//     // await order.save();
//     await customer.save();
// }
// adding();

const deletion= async()=>{
    await Customer.findByIdAndDelete('66ba2cca5731a12c62e8e3f0');
}
deletion();