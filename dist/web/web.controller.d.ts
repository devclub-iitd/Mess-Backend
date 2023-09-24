import { Request, Response } from 'express';
export declare class WebController {
    root(req: any): {
        message: string;
        user: any;
    };
    login(req: Request, res: Response): void;
    logout(req: Request, res: Response): {
        user: {
            id: string;
            kerberos: string;
            isManager: boolean;
            name: string;
            role: string;
        };
    };
    users(req: Request, res: Response): {
        user: {
            id: string;
            kerberos: string;
            isManager: boolean;
            name: string;
            role: string;
        };
    };
    meals(req: Request, res: Response): {
        user: {
            id: string;
            kerberos: string;
            isManager: boolean;
            name: string;
            role: string;
        };
    };
    mealtokens(req: Request, res: Response): {
        user: {
            id: string;
            kerberos: string;
            isManager: boolean;
            name: string;
            role: string;
        };
    };
    rebate(req: Request, res: Response): {
        user: {
            id: string;
            kerberos: string;
            isManager: boolean;
            name: string;
            role: string;
        };
    };
}
