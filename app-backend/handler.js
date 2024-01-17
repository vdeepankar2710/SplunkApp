'use strict';
const axios = require("axios");
const { getHandler } = require("./requestHandler");
const Note = require("./models/trailModel");
const Alerts = require("./models/Alerts");
const Apps = require("./models/Apps");
const Dashboards = require("./models/Dashboards");
const Fields = require("./models/Fields");
const Indexes = require("./models/Indexes");
const Lookups = require("./models/Lookups");
const Reports = require("./models/Reports");
const SourceTypes = require("./models/SourceTypes");

const connectToDatabase = require("./mongoConfig");

module.exports.getAlertActions = async (event) => {
    try {
        try {
        let tempRes = await getHandler('/servicesNS/-/-/alerts/alert_actions')
            // we need to feed this data into the database

        if (tempRes.entry && tempRes.entry.length > 0) {
            let alertsArr = tempRes.entry.map((element) => {
                return {
                    name: element.content.label,
                    app: element.acl.app,
                    author: element.author,
                    owner: element.acl.owner,
                    contentType: element.content.content_type,
                    description: element.content.description,
                    maxResults: element.content.maxresults,
                    maxTime: element.content.maxtime,
                    priority: element.content.priority,
                    trackAlert: element.content.track_alert,
                }
            })

            // console.log("alertsArr", alertsArr, alertsArr.length);
            try {
                await connectToDatabase();
                try {
                    await Alerts.insertMany(alertsArr);
                    return {
                        statusCode: 200,
                        body: JSON.stringify({
                            message: 'This is the list of AlertActions',
                            data: alertsArr,
                            statusCode: 200
                        }),
                    }
                    
                }catch(err){
                    // throw err;
                     return {
                        statusCode: 500,
                        body: JSON.stringify({
                            message: "Cannot create data in table AlertActions",
                            statusCode: 500,
                            error:err
                        })
                    }
                }
            }catch(err) {
                return {
                    statusCode: 500,
                    body: JSON.stringify({
                        message: "Cannot create data in table AlertActions",
                        statusCode: 500,
                        error:err
                    })
                }
                // throw err;
            }   
        } else {
            console.log("zero length array in entry");
        }}
        catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Error in fetching details from the server",
                    statusCode:500
                })
            }
        }
    }
    catch (err) {
        console.log("Internal server error:::error in getting AlertActions  ", err);
        return {
            statusCode: 500,
            body:
                JSON.stringify({
                statusCode:500,
                message:"Internal server error occured while getting AlertActions ."
            })
        }
    }
};

module.exports.getLookups = async (event) => {
    try {
        try {
            let tempRes = await getHandler('/services/data/lookup-table-files')
            // we need to feed this data into the database
            
            if (tempRes.entry && tempRes.entry.length > 0) {
                let lookupsArr = tempRes.entry.map((element) => {
                    return {
                        name: element.content.label,
                        app: element.acl.app,
                        author: element.author,
                        removable: element.acl.removable,
                        owner: element.acl.owner,
                        modifiable: element.acl.modifiable,
                        sharing: element.acl.sharing,
                        status: element.content.disabled ? "Disabled" : "Enabled",
                    }
                })
                try {
                    await connectToDatabase()
                    try {
                        await Lookups.insertMany(lookupsArr)
                        console.log("Inserted into table");
                        return {
                            statusCode: 200,
                            body: JSON.stringify(
                                {
                                    message: 'This is the list of Lookups  ',
                                    input: event,
                                    data: lookupsArr,
                                    statusCode: 200
                                },
                            ),
                        };
                    } catch (err) {
                        throw err;
                    }
                } catch (err) {
                    return {
                        statusCode: 500,
                        body: JSON.stringify({
                            message: "Cannot create data in table AlertActions",
                            status: 500,
                            error: err
                        })
                    }
                    // throw err;
                }
            }
            else {
                console.log("zero length array in entry");
            }
            
        }
        catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Error in fetching details from the server",
                    statusCode: 500
                })
            }
        }
    }
    catch (err) {
        console.log("Internal server error:::error in getting Lookups  ", err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                statusCode: 500,
                message: "Internal server error occured while getting Lookups ."
            })
        }
    }

}

module.exports.getFields = async (event) => {
    try {
        try {
            let tempRes = await getHandler('/services/data/fields')
            // we need to feed this data into the database
            if (tempRes.entry && tempRes.entry.length > 0) {
                let fieldsArr = tempRes.entry.map((element) => {
                    return {
                        name: element.content.label,
                        app: element.acl.app,
                        author: element.author,
                        removable: element.acl.removable,
                        owner: element.acl.owner,
                        modifiable: element.acl.modifiable,
                        sharing: element.acl.sharing,
                        status: element.content.disabled ? "Disabled" : "Enabled",
                        indexed: element.content["INDEXED"],
                        indexedvalue: element.content["INDEXED_VALUE"]
                    }
                })
                try {
                    await connectToDatabase()
                    try {
                        await Fields.insertMany(fieldsArr);
                    
                        console.log("Inserted into table");
                        return {
                            statusCode: 200,
                            body: JSON.stringify(
                                {
                                    message: 'This is the list of Fields  ',
                                    input: event,
                                    data: fieldsArr,
                                    statusCode: 200
                                },
                            ),
                        };
                    } catch (err) {
                        return {
                            statusCode: 500,
                            body: JSON.stringify({
                                message: "Cannot create data in table AlertActions",
                                status: 500,
                                error: err
                            })
                        }
                    }
                } catch (err) {
                    throw err;
                }
            }else {
                console.log("zero length array in entry");
            }
        
        }catch (err){
            return {
                statusCode: 500,
                body: JSON.stringify({
                message: "Error in fetching details from the server",
                statusCode:500
                })
            }
        }

    }
    catch (err) {
        console.log("Internal server error:::error in getting Fields  ", err);
        return {
        statusCode: 500,
        body:
            JSON.stringify({
            statusCode:500,
            message:"Internal server error occured while getting Fields ."
        })
        }
    }
};

module.exports.getIndexes = async (event) => {
    try {
        try {
            let tempRes = await getHandler('/services/data/indexes')
            // we need to feed this data into the database   
            if (tempRes.entry && tempRes.entry.length > 0) {
                let indexesArr = tempRes.entry.map((element) => {
                    return {
                        name: element.name,
                        app: element.acl.app,
                        author: element.author,
                        canList: element.acl.can_list,
                        bucketMerging: element.content.bucketMerging,
                        enableDataArchive: element.content["archiver.enableDataArchive"],
                        assureUTF8: element.content.assureUTF8,
                        removable: element.acl.removable,
                        owner: element.acl.owner,
                        modifiable: element.acl.modifiable,
                        sharing: element.acl.sharing,
                        status: element.content.disabled ? "Disabled" : "Enabled",
                        coldPath: element.content.coldPath,
                        datatype: element.content.datatype,
                        enableRealtimeSearch: element.content.enableRealtimeSearch,
                        enableDataIntegrityControl: element.content.enableDataIntegrityControl,
                        indexThreads: element.content.indexThreads,
                        maxMemMB: element.content.maxMemMB,
                        memPoolMB: element.content.memPoolMB,
                        syncMeta: element.content.syncMeta,
                        waitPeriodInSecsForManifestWrite: element.content.waitPeriodInSecsForManifestWrite,

                    }
                })
                try {
                    await connectToDatabase()
                    try {
                        await Indexes.insertMany(indexesArr)
                        return {
                            statusCode: 200,
                            body: JSON.stringify({
                                message: 'This is the list of Indexes  ',
                                input: event,
                                data: indexesArr,
                                statusCode: 200
                            }),
                        }
                    
                    } catch (err) {
                        return {
                            statusCode: 500,
                            body: JSON.stringify({
                                message: "Cannot create data in table AlertActions",
                                status: 500,
                                error: err
                            })
                        }
                    }
                } catch (err) {
                    return {
                        statusCode: 500,
                        body: JSON.stringify({
                            message: "Error in fetching details from the server",
                            statusCode: 500
                        })
                    }
                }
            } else {
                console.log("zero length array in entry");
            }
        } catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Error in fetching details from the server",
                    statusCode:500
                })
            }
        }
    }
    catch (err) {
        console.log("Internal server error:::error in getting Indexes  ", err);
        return {
        statusCode: 500,
        body:
            JSON.stringify({
                statusCode:500,
                message:"Internal server error occured while getting Indexes ."
            })
        }
    }
};

module.exports.getSourceTypes = async (event) => {
    try {
        try {
            let tempRes = await getHandler('/services/saved/sourcetypes')

            if (tempRes.entry && tempRes.entry.length > 0) {
                let sourceTypesArr = tempRes.entry.map((element) => {
                    return {
                        name: element.name,
                        app: element.acl.app,
                        author: element.author,
                        removable: element.acl.removable,
                        owner: element.acl.owner,
                        modifiable :element.acl.modifiable,
                        sharing:element.acl.sharing,
                        status: element.content.disabled? "Disabled" : "Enabled",
                        category: element.content.category,
                        segmentation: element.content["SEGMENTATION"],
                        charset: element.content["CHARSET"],
                        dateTimeCofig: element.content["DATETIME_CONFIG"],
                        indexdingExtractions: element.content["INDEXED_EXTRACTIONS"],
                        matchLimit:element.content["MATCH_LIMIT"],
                    }
                })
                try {
                    await connectToDatabase()
                    try {
                        await SourceTypes.insertMany(sourceTypesArr)
                        return {
                            statusCode: 200,
                            body: JSON.stringify({
                                message: 'This is the list of Sourcetypes',
                                input: event,
                                data: sourceTypesArr,
                                statusCode: 200
                            }),
                        }
                    } catch(err) {
                        throw err;
                    }

                } catch(err) {
                    return {
                        statusCode: 500,
                        body: JSON.stringify({
                            message: "Cannot create data in table sourcetypes. db connection error",
                            status: 500,
                            error:err
                        })
                    }
                }
            }else {
                console.log("zero length array in entry");
            }
        }
        catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Error in fetching details from the server",
                    statusCode:500
                })
            }
        }
    }
    catch (err) {
        console.log("Internal server error:::error in getting Sourcetypes", err);
        return {
            statusCode: 500,
            body:JSON.stringify({
                statusCode:500,
                message:"Internal server error occured while getting Sourcetypes ."
            })
        }
    }
};

module.exports.getSavedSearches = async (event) => {
    try {
        try {
            let tempRes = await getHandler('/servicesNS/-/-/saved/searches')
        
            if (tempRes.entry && tempRes.entry.length > 0) {
                let reportArr = tempRes.entry.map((element) => {
                    return {
                        name: element.name,
                        app: element.acl.app,
                        author: element.author,
                        owner: element.acl.owner,
                        modifiable: element.acl.modifiable,
                        sharing: element.acl.sharing,
                        visible: element.content["is_visible"],
                        scheduled: element.content["is_scheduled"],
                        scheduledAs: element.content["schedule_as"],
                        schedulePriority: element.content["schedule_priority"],
                        scheduleWindow: element.content["schedule_window"],
                    }
                })
                try {
                    await connectToDatabase();
                    try {
                        await Reports.insertMany(reportArr)
                        console.log("Inserted into table");
                        return {
                            statusCode: 200,
                            body: JSON.stringify({
                                message: 'This is the list of SavedSearches',
                                input: event,
                                data: reportArr,
                                statusCode: 200
                            }
                            ),
                        };
                    } catch (err) {
                        throw err;
                        
                    }
                } catch (err) {
                    return {
                        statusCode: 500,
                        body: JSON.stringify({
                            message: "Cannot create data in table Reports. Database connection failed",
                            status: 500,
                            error: err
                        })
                    }
                }
            } else {
                return {
                    statusCode: 404,
                    body: JSON.stringify({
                        statusCode: 404,
                        message: "No data for requested resource"
                    })
                }
            }
        }
        catch (err) {
            console.log("Internal server error:::error in getting SavedSearches ", err);
            return {
                statusCode: 500,
                body:
                    JSON.stringify({
                        statusCode: 500,
                        message: "Internal server error occured while getting SavedSearches."
                    })
            }
        }
    } catch (err) {
        // throw err;
        return {
            statusCode: 500,
            body:JSON.stringify({
                statusCode: 500,
                message: "Internal server error occured while getting SavedSearches."
            })
        }
    }
}

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Note.create(JSON.parse(event.body))
        .then(note => callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the note.'
        }));
    });
};


module.exports.getDashboards = async (event, context, callback) => {
    try {
        try {
            let tempRes = await getHandler('/servicesNS/-/-/data/ui/views')
            // we need to feed this data into the database
            if (tempRes.entry && tempRes.entry.length > 0) {
                let dashboardArr = tempRes.entry.map((element) => {
                    return {
                        name: element.content.label,
                        modifiable: element.acl.modifiable,
                        folderName: element.name,
                        removable: element.acl.removable,
                        visible: element.content.isVisible,
                        rootNode: element.content.rootNode,
                        sharing: element.acl.sharing,
                        status: element.content.disabled ? "Disabled" : "Enabled",
                    }
                })

                try {
                    await connectToDatabase();
                    try {
                        await Dashboards.insertMany(dashboardArr)
                        console.log("Inserted into table");
                        return {
                            statusCode: 200,
                            body: JSON.stringify({
                                message: 'This is the list of dashboards',
                                input: event,
                                data: dashboardArr,
                                statusCode: 200
                            }),
                        };
                    } catch (err) {
                        throw err;
                    }

                } catch(err) {
                     return {
                        statusCode: 500,
                        body: JSON.stringify({
                            message: "Cannot create data in table Dashboard",
                            status: 500,
                            error:err
                        })
                    }
                }
            } else {
                return {
                    statusCode: 404,
                    body: JSON.stringify({
                        message: "Data not available for the requested resource",
                        statusCode:404
                    })
                }
            }
        } catch (err){
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Error in fetching details from the server",
                    statusCode:500
                })
            }
        }
    }
    catch (err) {
        console.log("Internal server error:::error in getting Dashboards ", err);
        return {
        statusCode: 500,
        body:
            JSON.stringify({
            statusCode:500,
            message:"Internal server error occured while getting Dashboards."
        })
        }
    }
}

module.exports.getApps = async (event) => {
    try {
        try {
        let tempRes = await getHandler('/services/apps/local')
        if (tempRes.entry && tempRes.entry.length > 0) {
            let appsArr = tempRes.entry.map((element) => {
                return {
                    name: element.content.name,
                    app: element.acl.app,
                    author: element.author,
                    modifiable :element.acl.modifiable,
                    folderName: element.name,
                    removable: element.acl.removable,
                    visible: element.content.visible,
                    canShareApp: element.content["can_share_app"],
                    canList: element.content["can_list"],
                    canChangePerms: element.content["can_change_perms"],
                    canShareApp: element.content["can_share_app"],
                    description: element.content.description,
                    status: element.content.disabled ? "Disabled" : "Enabled",
                }
            })
            try {
                await connectToDatabase()
                try {
                    await Apps.insertMany(appsArr)
                    
                console.log("Inserted into table");
                    return {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: 'This is the list of apps',
                        input: event,
                        data: appsArr,
                        statusCode: 200
                    }),
                }
                } catch (err) {
                    throw err;
                    
                }
            } catch (err) {
                return {
                    statusCode: 500,
                    body: JSON.stringify({
                        message: "Cannot create data in table Apps",
                        status: 500,
                        error:err
                    })
                }
            }} else {
                console.log("zero length array in entry");
            }
        }
        catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Error in fetching details from the server",
                    statusCode:500
                })
            }
        }
    }
    catch (err) {
        console.log("Internal server error:::error in getting Apps ", err);
        return {
            statusCode: 500,
            body:
                JSON.stringify({
                statusCode:500,
                message:"Internal server error occured while getting apps."
            })
        }
    }
}