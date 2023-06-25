import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors"; 
import proxy from "express-http-proxy";

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
    app.use("/users", proxy("http://localhost:8001"));
    app.use("/auth", proxy("http://localhost:8002"));
    app.use("/cards", proxy("http://localhost:8003")); //cards
    app.use("/prompts", proxy("http://localhost:8005"));
    // app.use("/decks", proxy("http://localhost:8004"));
    // Routes
    app.use("/", (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({ message: "Server says Hello" });
    });

    app.listen(8000, () => {
      console.log("Server Listening on port http://localhost:8000");
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to start the server:", error.message);
      process.exit(1);
    }
  }
};

startCardServer();
