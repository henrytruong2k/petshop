import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/database.js";
import redisClient from "./config/reids.js";

dotenv.config();
connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

app.get("/api/abc", async (req, res) => {
  await redisClient.set("abc", "abc123", {
    EX: 3 * 60,
    NX: true,
  });
  return res.json({ message: "hello" });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
});
