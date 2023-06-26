// import express, { Request, Response, NextFunction } from "express";
// import {config} from "./config/config.env";
// import cors from "cors";
// import bodyParser from "body-parser";
// import proxy from "express-http-proxy";

// export const createApp = async (app: express.Application) => {
//   // const app = express();

//   // Middleware
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: true }));
//   app.use(bodyParser.json());
//   app.use(
//     cors({
//       credentials: true,
//     })
//   );

//   // Routes
//   app.use("/users", proxy(config.userUrl));
//   app.use("/auth", proxy(config.authUrl));
//   app.use("/cards", proxy(config.cardUrl));
//   app.use("/prompts", proxy(config.promptUrl));
//   // app.use("/decks", proxy(config.deckUrl));
//   // app.use("/server", proxy(config.serverPort));

//   app.use("/", (req: Request, res: Response, next: NextFunction) => {
//     return res.status(200).json({ message: "Server says Hello" });
//   });

//   return app;
// };
