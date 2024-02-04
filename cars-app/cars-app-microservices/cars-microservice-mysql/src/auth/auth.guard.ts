import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { GetVerificationKey, expressjwt } from 'express-jwt';
import { Request } from 'express';
import { ConfigService } from "@nestjs/config";
import { expressJwtSecret } from "jwks-rsa";

@Injectable()
export class AuthGuard implements CanActivate {
    private readonly AUTH0_AUDIENCE: string;
    private readonly AUTH0_DOMAIN: string;

    constructor(private configService: ConfigService) {
        this.AUTH0_AUDIENCE = this.configService.get<string>('AUTH0_AUDIENCE');
        this.AUTH0_DOMAIN = this.configService.get<string>('AUTH0_DOMAIN');
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.getArgByIndex(0);
        const response = context.getArgByIndex(1);
        const token = this.extractToken(request);

        if (!token) {
            throw new UnauthorizedException('No token provided');
        }

        const jwtCheck = 
            expressjwt({
                secret: expressJwtSecret({
                    cache: true,
                    rateLimit: true,
                    jwksRequestsPerMinute: 5,
                    jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`
                }) as GetVerificationKey,
                audience: this.AUTH0_AUDIENCE,
                issuer: this.AUTH0_DOMAIN,
                algorithms: ['RS256'],
            });

        try {
            await new Promise<void>((resolve, reject) => {
                jwtCheck(request, response, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
                });
            });

            return true;
        } 
        catch (error) {
            throw new UnauthorizedException(error.message || 'Unauthorized token');
        }
    }

    extractToken(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}