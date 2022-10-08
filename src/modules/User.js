import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userid : {type:String, required: true, unique: ture},
    password : {type:String, required: true, trim: ture},
    name : {type:String, required:true},
    email : {type:String, required:true},
    number : {type:String, required:true},
    links : [{type:String}],
    introduce : {type:String},
});

userSchema.pre('save', async function() {
    if(this.isModified("password")){
        this.password = bcrypt.hash(this.password, 5);
    }
});

const User = mongoose.model("User",userSchema);
export default User;