const mongoose = require('mongoose');
const typesenseClient = require('../typesenseClient');
const AppSchema = new mongoose.Schema({  
    name: String,
    folderName: String,
    removable: Boolean,
    author: String,
    updateChecking: Boolean,
    description: String,
    status: String,
    version: String,
    visible: Boolean,
    modifiable: Boolean,
    app: String,
    canChangePerms: Boolean,
    canList: Boolean,
    canShareApp: Boolean,
});



module.exports = mongoose.model('Apps', AppSchema);