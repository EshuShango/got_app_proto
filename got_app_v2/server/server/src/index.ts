import express, { NextFunction, Request, Response } from "express";
import { config } from "./config/config.env";
// import { createApp } from "./express_app";
import { env } from "process";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import proxy from "express-http-proxy";

dotenv.config();
export const APIgate = process.env.SERVER_PORT || 8000;
export const startCardServer = async () => {
  try {
    // const APIgate = 8000;
    const APIgate = process.env.SERVER_PORT ;
    
    const userSrvr = process.env.SERVER_PORT ;
    const authSrvr= process.env.AUTH_URL ;
    const cardSrvr =  process.env.USER_URL;
    const promptSrvr= process.env.PROMPT_URL;

    const app = express();

    // Database connection

    // await createApp(app);
    // app.use("/users", proxy("http://localhost:8001"));
    // app.use("/auth", proxy("http://localhost:8002"));
    // app.use("/cards", proxy("http://localhost:8003")); //cards
    // app.use("/prompts", proxy("http://localhost:8005"));
    // // app.use("/decks", proxy("http://localhost:8004"));
    //!
    app.use("/users", proxy("userSrvr"));
    app.use("/auth", proxy("authSrvr"));
    app.use("/cards", proxy("cardSrvr")); //cards
    app.use("/prompts", proxy("promptSrvr"));
    // app.use("/decks", proxy("http://localhost:8004"));

    app.use("/", (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({ message: "Server says Hello" });
    });

    app.listen(APIgate, () => {
      console.log(`Server Listening on port: http://localhost:${APIgate}`);
    });

//     app.listen(proxy(APIgate, {
//   proxyErrorHandler: function(err, res, next) {
//     next(err);
//   }
// }));
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
// dotenv.config();
// export const startCardServer = async () => {
//   try {
//     // / export const APIgate = process.env.SERVER_PORT || 8000;
//     const app = express();

//     // Database connection

//     // await createApp(app);
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
