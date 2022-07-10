import mongoose from 'mongoose';

const SchemaUpisi = mongoose.Schema({
      
    _id: String,
    predmet_id:[String]
})

var Upisi = mongoose.model('upisi', SchemaUpisi);

export default Upisi;