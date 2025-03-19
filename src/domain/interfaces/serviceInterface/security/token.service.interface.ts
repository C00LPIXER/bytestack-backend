import { ITokenPayload } from "../../../entities/models/token.entity";

export interface ITokenService {
  generateAccessToken(userId: string): string;
  generateRefreshToken(userId: string): string;
  verifyToken(token: string): ITokenPayload | null;
  blacklistToken(token: string, expirationSeconds: number): Promise<void>;
  isTokenBlacklisted(token: string): Promise<boolean>;
  storeRefreshToken(
    userId: string,
    token: string,
    expirationSeconds: number
  ): Promise<void>;
  getRefreshToken(userId: string): Promise<string | null>;
  deleteRefreshToken(userId: string): Promise<void>;
  getAccessTokenExpiry(): number;
  getRefreshTokenExpiry(): number;
}
