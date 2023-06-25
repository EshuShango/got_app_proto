import express, { NextFunction, Request, Response } from "express";

const startCardServer = async () => {
  const app = express();
  app.use("/", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "CardServer says Hello" });
  });

  app.listen(8000, () => {
    console.log("CardServer Listening on port http://localhost:8000");
  });
};

startCardServer();
