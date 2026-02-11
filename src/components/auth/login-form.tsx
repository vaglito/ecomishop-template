'use client';

import { useActionState } from 'react';
import { authenticate } from '@/actions/auth-actions'; // You'll need to export this from your actions file
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export default function LoginForm() {
    const [errorMessage, dispatch, isPending] = useActionState(
        authenticate,
        undefined
    );

    return (
        <form action={dispatch} className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={6}
                />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox id="remember" name="remember" />
                    <Label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </Label>
                </div>
                <Link
                    href="#"
                    className="text-sm font-medium text-primary hover:underline"
                >
                    Forgot password?
                </Link>
            </div>
            {errorMessage && (
                <div className="text-sm text-red-500 font-medium">
                    {errorMessage}
                </div>
            )}
            <Button className="w-full" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign In
            </Button>
        </form>
    );
}
