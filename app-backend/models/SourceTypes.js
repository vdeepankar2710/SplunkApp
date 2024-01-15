const mongoose = require('mongoose');
const SourceTypeSchema = new mongoose.Schema({  
    name: String,
    app: String,
    author: String,
    removable: Boolean,
    owner: String,
    category: String,
    segmentation: String,
    charset: String,
    dateTimeCofig: String,
    indexdingExtractions: String,
    matchLimit:String,
    modifiable :Boolean,
    sharing:String,
    status: String,
});
module.exports = mongoose.model('SourceTypes', SourceTypeSchema);