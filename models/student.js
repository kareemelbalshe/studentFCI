import { Schema, model } from 'mongoose';

const student = new Schema({
    email: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Passward: {
        type: String,
        required: true
    },
    Level: {
        type: String,
        required: false
    },
    Department: {
        type: String,
        required: false
    },
    Age: {
        type: String,
        required: false
    },
    Acadmic: {
        type: String,
        required: false
    },
    Fuclty: {
        type: String,
        required: false
    },
    College: {
        type: String,
        required: false
    },
    Address: {
        type: String,
        required: false
    },
    National: {
        type: String,
        required: false
    },
    Phone: {
        type: String,
        required: false
    },
    Gender: {
        type: String,
        required: false
    },
}, { timestamps: true })

export default model('student', student)