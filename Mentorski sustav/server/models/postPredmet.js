import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    id: String,
    ime: String,
    kod: String,
    program: String,
    bodovi:String,
    semestar_redovni:String,
    semestar_izvanredni:String,
    izborni:String,
    tags: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var postPredmet = mongoose.model('postmanufacturers', Schema);

export default postPredmet;