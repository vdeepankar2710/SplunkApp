const mongoose = require('mongoose');
const DashboardSchema = new mongoose.Schema({  
    name: String,
    folderName: String,
    version: String,
    updateChecking: Boolean,
    visible: Boolean,
    sharing: String,
    status: String,
    rootNode: String,
    removable:String
  
});
module.exports = mongoose.model('Dashboards', DashboardSchema);