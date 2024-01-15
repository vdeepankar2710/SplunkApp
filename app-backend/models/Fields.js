const mongoose = require('mongoose');
const FieldSchema = new mongoose.Schema({  
    name: String,
    app: String,
    author: String,
    removable: Boolean,
    owner: String,
    modifiable :Boolean,
    sharing:String,
    status: String,
    indexed: String,
    indexedValue: String,
    
});
module.exports = mongoose.model('Fields', FieldSchema);