import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
    Name: String,
    medId: String,
    expiryDate: Date,
    price: Number,
    img: String
  });

const Medicine = mongoose.model('Medicine',medicineSchema)
export default Medicine