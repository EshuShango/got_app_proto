import express, { NextFunction, Request, Response } from "express";
import { config } from "./config/config.env";
// import { createApp } from "./express_app";
import { env } from "process";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import proxy from "express-http-proxy";

dotenv.config();
export const startCardServer = async () => {
  try {
    const APIgate = 8000;
    // const APIgate = process.env.SERVER_PORT || 8000;

    const app = express();

    // Database connection

    // await createApp(app);
    app.use("/users", proxy("http://localhost:8001"));
    app.use("/auth", proxy("http://localhost:8002"));
    app.use("/cards", proxy("http://localhost:8003")); //cards
    app.use("/prompts", proxy("http://localhost:8005"));
    // app.use("/decks", proxy("http://localhost:8004"));

    app.use("/", (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({ message: "Server says Hello" });
    });

    app.listen(APIgate, () => {
      console.log(`Server Listening on port: http://localhost:${APIgate}`);
    });

    // app.listen(proxy(), () => {
    //   console.log(`Server Listening on port: ${config.serverPort}`);
    // });
    // app.listen(APIgate, () => {
    //   console.log(`Server Listening on port: ${APIgate}`);
    // });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to start the server:", error.message);
      process.exit(1);
    }
  }
  // return app;s
};

startCardServer();

//! implement api gateway
// export const startCardServer = async () => {
//   try {
//     const app = express();

//     // Database connection

//     await createApp(app);
//     app.use("/users", proxy(config.userUrl));
//     app.use("/auth", proxy(config.authUrl));
//     app.use("/cards", proxy(config.cardUrl));
//     app.use("/prompts", proxy(config.promptUrl));
//     // app.use("/decks", proxy(config.deckUrl));
//     app.use("/", (req: Request, res: Response, next: NextFunction) => {
//       return res.status(200).json({ message: "Server says Hello" });
//     });

//     app.listen(proxy(config.serverPort), () => {
//       console.log(`Server Listening on port: ${config.serverPort}`);
//     });
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Failed to start the server:", error.message);
//       process.exit(1);
//     }
//   }
//   // return app;s
// };

// startCardServer();
