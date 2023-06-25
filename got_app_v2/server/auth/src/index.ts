import express, { NextFunction, Request, Response } from "express";

const startAuthServer = async () => {
  const app = express();
  app.use("/", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "AuthServer says Hello" });
  });

  app.listen(8002, () => {
    console.log("AuthServer Listening on port http://localhost:8002");
  });
};

startAuthServer();
