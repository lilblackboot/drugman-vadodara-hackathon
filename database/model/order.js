import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId: String,
    medicine: String,
    orderDate: Date,
    price: Number
  });

const Order = mongoose.model('Order',OrderSchema)
export default Order