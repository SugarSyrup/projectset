import mongoose from 'mongoose';

const nameCardSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    createdAt : {type:Date, default: Date.now}
});

console.log(Date.now);

const NameCard = mongoose.model("NameCard", nameCardSchema);
export default NameCard;