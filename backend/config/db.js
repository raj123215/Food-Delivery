import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rajk038720:Rajkumar@cluster0.ak0gi.mongodb.net/FOOD-DELIVARY"
    )
    .then(() => {
      console.log("MongoDB connected");
    });
};
