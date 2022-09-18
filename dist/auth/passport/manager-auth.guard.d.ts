import { ExecutionContext } from '@nestjs/common';
declare const ManagerAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class ManagerAuthGuard extends ManagerAuthGuard_base {
    canActivate(context: ExecutionContext): boolean;
}
export {};
