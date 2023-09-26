import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./mongoDB/connect.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import postRoutes from "./routes/post.js";
import dalleRoutes from "./routes/dalle.js";

const app = express();

//configurations
app.use(express.json({ limit: "50mb" }));
app.use(cors());

//routes
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

//error-handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//server and database
const PORT = process.env.PORT || 5001;

const startServer = () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
