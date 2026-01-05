const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');
dotenv.config(); // must be called before process.env.MONGO_URI is used

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db("contactManager");
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const getDB = () => {
  if (!db) throw new Error("Database not connected");
  return db;
};

module.exports = { connectDB, getDB };
