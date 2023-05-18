import mongoose from "mongoose";

// mongoose
//     .connect(process.env.DB)
//     .then(() => console.log("Connected to the database.."))
//     .catch((err) => console.log(err));

const connectDB = async (url) => {
    return mongoose.connect(url);
};

export default connectDB;
