import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Please provide name'], minlength: 3, maxLength: 20, trim: true,},
    email: {type: String, required: [true, 'Please provide email'], validate: {validator: validator.isEmail , message: 'Please provide a valid email'}, unique: true},
    password: {type: String, required: [true, 'Please provide email'], minlength: 6},
    lastName: {type: String, maxLength: 20, trim: true, default: 'last Name'},
    city: {type: String, maxLength: 20, trim: true, default: 'my City'},
})

export default mongoose.model('User', UserSchema) 