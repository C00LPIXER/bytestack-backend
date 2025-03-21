import { injectable, inject } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import { ILogoutUseCase } from "../../../domain/interfaces/usecaseInterface/auth/logout.usecase.interface";
import { ILogoutController } from "../../../domain/interfaces/controllerInterface/auth/logout.controller.interface";
import { BaseError } from "../../../domain/errors/base.error";
import { HTTP_STATUS } from "../../../shared/constants/status-codes";
import { ERROR_MSG } from "../../../shared/constants/error-msg";

@injectable()
export class LogoutController implements ILogoutController {
  constructor(
    @inject("ILogoutUseCase") private logoutUseCase: ILogoutUseCase
  ) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const accessToken = req.cookies.accessToken;
      if (!accessToken) {
        throw new BaseError(
          "You are already logged out.",
          HTTP_STATUS.UNAUTHORIZED,
          true
        );
      }

      const { status, message, success } =
        await this.logoutUseCase.execute(accessToken);

      // Clear the cookies
      res.clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      res.status(status).json({ message, success });
    } catch (error) {
      next(error);
    }
  }
}
