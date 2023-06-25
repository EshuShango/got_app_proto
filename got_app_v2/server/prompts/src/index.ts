import express, { NextFunction, Request, Response } from "express";

const startPromptServer = async () => {
  const app = express();
  app.use("/", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "PromptServer says Hello" });
  });

  app.listen(8003, () => {
    console.log("PromptServer Listening on port http://localhost:8003");
  });
};

startPromptServer();
