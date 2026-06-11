import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
export const dbConnect = async () => {
  console.log("mongo db url ", `${process.env.MONGODB_URI}/${DB_NAME}`);
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n mongo db conected !! DB HOST :%{  }`);
  } catch (error) {
    console.error("MONGO DB Connection Failed : ", error);
    process.exit(1);
  }
};
