export interface ILogoutUseCase {
  execute(
    accessToken: string
  ): Promise<{ status: number; message: string; success: boolean }>;
}
