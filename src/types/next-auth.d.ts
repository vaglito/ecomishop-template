import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            accessToken: string;
            roles: string[];
            id: string;
            isVerified: boolean;
        } & DefaultSession["user"];
        accessToken: string;
        roles: string[];
    }

    interface User {
        accessToken: string;
        roles: string[];
        id: string;
        isVerified: boolean;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        roles: string[];
        id: string;
        isVerified: boolean;
    }
}
