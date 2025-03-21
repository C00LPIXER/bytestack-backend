import { container } from "tsyringe";
import { SignupUseCase } from "../../application/useCases/auth/signup.usecase";
import { ISignupUseCase } from "../../domain/interfaces/usecaseInterface/auth/signup.usecase.interface";
import { SendEmailUseCase } from "../../application/useCases/auth/send-email.usecase";
import { ISendEmailUseCase } from "../../domain/interfaces/usecaseInterface/auth/send-email.usecase.interface";
import { ResetPasswordUseCase } from "../../application/useCases/auth/reset-password.usecase";
import { IResetPasswordUseCase } from "../../domain/interfaces/usecaseInterface/auth/reset-password.usecase.interface";
import { IRefreshTokenUseCase } from "../../domain/interfaces/usecaseInterface/auth/refresh-token.usecase.interface";
import { RefreshTokenUseCase } from "../../application/useCases/auth/refresh-token.usecase";
import { LoginUseCase } from "../../application/useCases/auth/login.usecase";
import { ILoginUseCase } from "../../domain/interfaces/usecaseInterface/auth/login.usecase.interface";
import { LogoutUseCase } from "../../application/useCases/auth/logout.usecase";
import { ILogoutUseCase } from "../../domain/interfaces/usecaseInterface/auth/logout.usecase.interface";
import { GetUserUseCase } from "../../application/useCases/user/get-user.usecase";
import { IGetUserUseCase } from "../../domain/interfaces/usecaseInterface/user/get-user.usecase.interface";
import { IForgotPasswordUseCase } from "../../domain/interfaces/usecaseInterface/auth/forgot-password.usecase.interface";
import { ForgotPasswordUseCase } from "../../application/useCases/auth/forgot-password.usecase";

container.register<ISignupUseCase>("ISignupUseCase", {
  useClass: SignupUseCase,
});
container.register<ISendEmailUseCase>("ISendEmailUseCase", {
  useClass: SendEmailUseCase,
});

container.register<IResetPasswordUseCase>("IResetPasswordUseCase", {
  useClass: ResetPasswordUseCase,
});

container.register<IForgotPasswordUseCase>("IForgotPasswordUseCase", {
  useClass: ForgotPasswordUseCase,
});

container.register<IRefreshTokenUseCase>("IRefreshTokenUseCase", {
  useClass: RefreshTokenUseCase,
});

container.register<ILoginUseCase>("ILoginUseCase", {
  useClass: LoginUseCase,
});

container.register<ILogoutUseCase>("ILogoutUseCase", {
  useClass: LogoutUseCase,
});

container.register<IGetUserUseCase>("IGetUserUseCase", {
  useClass: GetUserUseCase,
});
