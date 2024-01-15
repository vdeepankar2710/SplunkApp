const mongoose = require('mongoose');
const AlertSchema = new mongoose.Schema({  
    name: String,
    app: String,
    author: String,
    contentType: String,
    description: String,
    maxResults: Number,
    maxTime: String,
    priority: String,
    trackAlert: Boolean,
    owner:String,
});
module.exports = mongoose.model('Alerts', AlertSchema);