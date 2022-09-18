import 'express-session';
declare module 'express-session' {
  interface SessionData {
    user: {
      id: string;
      kerberos: string;
      isManager: boolean;
      name: string;
      role: string;
    };
  }
}
