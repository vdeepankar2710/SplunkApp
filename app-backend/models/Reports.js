const mongoose = require('mongoose');
const ReportSchema = new mongoose.Schema({  
    name: String,
    app: String,
    author: String,
    owner: String,
    modifiable: Boolean,
    sharing: String,
    visible: String,
    scheduled: Boolean,
    scheduledAs: String,
    schedulePriority: String,
    scheduleWindow:String
});
module.exports = mongoose.model('Reports', ReportSchema);