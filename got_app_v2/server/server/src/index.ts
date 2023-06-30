import express, { NextFunction, Request, Response } from "express";
import { config } from "./config/config.env";
import proxy from "express-http-proxy";
// import { createApp } from "./express_app";
import bodyParser from "body-parser";
import cors from "cors";

export const startCardServer = async () => {
  try {
    const APIgate: string | number = config.serverPort || 8080;

    const app = express();

    // Database connection

    console.log(config);

    // await createApp(app);

    //!
    app.use("/users", proxy(config.userUrl));
    app.use("/auth", proxy(config.authUrl));
    app.use("/cards", proxy(config.cardUrl));
    app.use("/prompts", proxy(config.promptUrl));
    // app.use("/decks", proxy(config.deckUrl));

    app.use("/", (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({ message: "Server says Hello" });
    });

    //     app.listen(proxy(APIgate, {
    //   proxyErrorHandler: function(err, res: Response, next) {
    //     console.log(`Server Listening on port: ${APIgate}`);
    //     next(err);
    //   }
    // }));
    // app.listen(proxy(APIgate), () => {
    //   console.log(`Server Listening on port: ${APIgate}`);
    // });
    app.listen(APIgate, () => {
      console.log(`Server Listening on port: ${APIgate}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to start the server:", error.message);
      process.exit(1);
    }
  }
};

startCardServer();
