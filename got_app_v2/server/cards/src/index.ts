import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const startCardServer = async () => {
  try {
    const app = express();
    // Database connection

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(
      cors({
        credentials: true,
      })
    );
    // Routes
    app.use("/", (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({ message: "CardServer says Hello" });
    });

    app.listen(8003, () => {
      console.log("CardServer Listening on port http://localhost:8003");
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to start the server:", error.message);
      process.exit(1);
    }
  }
};

startCardServer();
