import express, { NextFunction, Request, Response } from "express";

const startUserServer = async () => {
  const app = express();
  app.use("/", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "UserServer says Hello" });
  });

  app.listen(8001, () => {
    console.log("UserServer Listening on port http://localhost:8001");
  });
};

startUserServer();
