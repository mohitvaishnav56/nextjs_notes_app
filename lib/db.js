import mongoose from "mongoose";

const mongodb_uri = process.env.MONGO_URI;
let isConnected = false;

export async function dbConnect() {
  if (isConnected) {
    console.log("db already connected");
    return;
  }
  try {
    const db = await mongoose.connect(mongodb_uri);
    isConnected = db.connections[0].readyState == 1;
    console.log("connected to the db", isConnected);
  } catch (err) {
    console.error("failed to connect to mongodb: ", err);
    throw err;
  }
}
