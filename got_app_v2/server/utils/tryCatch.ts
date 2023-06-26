 import express, { NextFunction, Request, Response } from "express";

export const tryCatch = (controller) => async (req: Request, res: Response, next: NextFunction) => { 
  try {
    await controller(req, res, next);
  } catch (error: any) {
    return next(error);
  }

 };
