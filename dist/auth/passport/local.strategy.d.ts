import { AuthService } from 'src/auth/auth.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(kerberos: string, password: string): Promise<any>;
}
export {};
