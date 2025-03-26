import { NextFunction, Request, Response } from "express";

export interface IUpdateUserController {
  handle(req: Request, res: Response, next: NextFunction): Promise<void>;
}
