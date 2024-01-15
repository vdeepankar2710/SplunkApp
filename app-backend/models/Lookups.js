const mongoose = require('mongoose');
const LookupSchema = new mongoose.Schema({  
    name: String,
    app: String,
    author: String,
    removable: Boolean,
    owner: String,
    modifiable :Boolean,
    sharing:String,
    status: String,
});
module.exports = mongoose.model('Lookups', LookupSchema);