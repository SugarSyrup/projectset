import mongoose from 'mongoose';

import crypto from 'crypto';
import util from 'util';

const randomBytesPromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);

const createSalt = async () => {
    const buf = await randomBytesPromise(64);
    return buf.toString("base64");
}
export const createHashedPassword = async (password) => {
    const salt = await createSalt();
    const key = await pbkdf2Promise(password, salt, 174932, 64, "sha512");
    const hashedPassword = key.toString("base64");

    return { hashedPassword, salt};
}

export const verifyPassword = async (password, userSalt, userPassword) => {
    const key = await pbkdf2Promise(password, userSalt, 174932, 64, "sha512");
    const hashedPassword = key.toString("base64");

    console.log(`hashed : ${hashedPassword}`);
    console.log(`password : ${userPassword}`);

    if(hashedPassword === userPassword) return true;
    return false;
}

const userSchema = new mongoose.Schema({
    id : {type:String, required: true, unique: true},
    pw : {type:String, required: true, trim: true},
    name : {type:String, required:true},
    email : {type:String, required:true},
    number : {type:String, required:true},
    links : [{type:String}],
    introduce : {type:String},
    salt : {type:String},
    createdAt : {type:Date, default: Date.now}
});

const User = mongoose.model("User",userSchema);
export default User;