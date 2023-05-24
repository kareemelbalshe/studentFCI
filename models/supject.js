import { Schema, model } from 'mongoose';

const supject =new Schema({
        name: {
            type: String,
            required: true
        },
        ID: {
            type: String,
            required: true
        },
        Level: {
            type: String,
            required: true
        },
        Department: {
            type: String,
            required: true
        },
        preRequisite: {
            type: String,
            required: false
        },
        doctor: {
            type: Schema.Types.ObjectId,
        required: false,
        ref: 'doctor'
        }
},{timestamps: true})

export default model('supject', supject)