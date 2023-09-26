import { StatusCodes } from "http-status-codes";
import { CustomApiError } from "../errors/index.js";

const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomApiError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Unknown error has occurred");
};

export default errorHandler;
