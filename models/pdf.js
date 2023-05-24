import { Schema, model } from 'mongoose';

const pdfs =new Schema({
        email: {
            type: String,
            required: true
        }
},{timestamps: true})

export default model('pdf',pdfs)