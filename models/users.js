import { Schema, model } from 'mongoose';

const admin1 =new Schema({
    email: {
        type: String,
        required: true
    },
    passward: {
        type: String,
        required: true
    },

},{timestamps: true})

export default model('admin1',admin1)