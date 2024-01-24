const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require('mongoose');

// const username = encodeURIComponent("deepankarvish500");
// const password = encodeURIComponent("Deep@Mongo");

// const cluster = "<clusterName>";
// const authSource = "<authSource>";
// const authMechanism = "<authMechanism>";

// let uri = `mongodb+srv://${username}:${password}@cluster0.k6jgkgb.mongodb.net/?retryWrites=true&w=majority`;
let uri = `mongodb://localhost:27017/Trialdb`

let isConnected;
const client = new MongoClient(uri);

module.exports = connectToDatabase = async () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  try {
    return await mongoose.connect(uri)  
  } catch (err) {
    throw err;
  }
  
};


