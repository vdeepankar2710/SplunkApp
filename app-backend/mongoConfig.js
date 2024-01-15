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

module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  return mongoose.connect(uri)
    .then(db => { 
      isConnected = db.connections[0].readyState;
    });
};

// connectToDatabase().then(() => {
//     console.log("connected to db successfully")
// }).catch((err) => {
//     console.log("err in connection", err);
    
// })

// async function run() {
//     try {
//         await client.connect();
//         // console.log("connected to client successfully!!!");

//         // const database = client.db("");
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     // const ratings = database.collection("<collName>");

//     // const cursor = ratings.find();

//     // await cursor.forEach(doc => console.dir(doc));
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);
