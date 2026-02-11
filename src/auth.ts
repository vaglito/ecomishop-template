import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;

                    try {
                        const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
                            method: 'POST',
                            body: JSON.stringify({ email, password }),
                            headers: { "Content-Type": "application/json" }
                        });

                        if (!res.ok) return null;

                        const user = await res.json();

                        // Backend returns { user: {...}, access_token: "..." }
                        if (user && user.access_token) {
                            return {
                                ...user.user,
                                accessToken: user.access_token,
                            };
                        }

                        return null;
                    } catch (error) {
                        console.error('Failed to login:', error);
                        return null;
                    }
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = (user as any).accessToken;
                token.roles = (user as any).roles;
                token.id = (user as any).id;
                token.isVerified = (user as any).isVerified;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.accessToken = token.accessToken as string;
                session.user.roles = token.roles as string[];
                session.user.id = token.id as string;
                session.user.isVerified = token.isVerified as boolean;
            }
            return session;
        }
    }
});
