import mongoose from 'mongoose';

const nameCardSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const NameCard = mongoose.model("NameCard", nameCardSchema);
export default NameCard;