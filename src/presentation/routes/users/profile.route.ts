import { NextFunction, Request, Response } from "express";
import {
  authMiddleware,
  getProfileController,
  getUserController,
  s3Controller,
  updateProfileController,
} from "../../../infrastructure/di/resolver";
import { BaseRoute } from "../base.route";

export class UserRoutes extends BaseRoute {
  constructor() {
    super();
  }

  protected initializeRoutes(): void {
    this.router.get(
      "/",
      (req: Request, res: Response, next: NextFunction) =>
        authMiddleware.authenticate(req, res, next),
      (req: Request, res: Response, next: NextFunction) => {
        getUserController.handle(req, res, next);
      }
    );

    this.router.get(
      "/:user",
      (req: Request, res: Response, next: NextFunction) => {
        getProfileController.handle(req, res, next);
      }
    );

    this.router.put(
      "/",
      (req: Request, res: Response, next: NextFunction) =>
        authMiddleware.authenticate(req, res, next),
      (req: Request, res: Response, next: NextFunction) => {
        updateProfileController.handle(req, res, next);
      }
    );

    this.router.post(
      "/upload-url",
      (req: Request, res: Response, next: NextFunction) =>
        authMiddleware.authenticate(req, res, next),
      (req: Request, res: Response, next: NextFunction) => {
        s3Controller.getUploadURL(req, res, next);
      }
    );
  }
}
