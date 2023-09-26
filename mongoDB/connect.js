import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => {
      console.log(
        "MongoDB Connected",
        mongoose.connection.host,
        mongoose.connection.name
      );
    })
    .catch((error) => console.log(error.message));
};

export default connectDB;
