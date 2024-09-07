import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userId: String,
    email: String,
    mobileNo: Number,
    password: String
  });

const User = mongoose.model('User',userSchema)
export default User