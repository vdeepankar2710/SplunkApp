const mongoose = require('mongoose');
const IndexSchema = new mongoose.Schema({  
    name: String,
    app: String,
    author: String,
    canList: Boolean,
    bucketMerging: String,
    enableDataArchive: Boolean,
    assureUTF8:Boolean,
    removable: Boolean,
    owner: String,
    modifiable :Boolean,
    sharing:String,
    status: String,
    coldPath: String,
    datatype: String,
    enableRealtimeSearch: Boolean,
    enableDataIntegrityControl: Boolean,
    indexThreads: String,
    maxMemMB: String,
    memPoolMB: String,
    syncMeta: Boolean,
    waitPeriodInSecsForManifestWrite:String,

});
module.exports = mongoose.model('Indexes', IndexSchema);