'use client';

import { Bell, Search, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Header() {
    return (
        <header className="flex h-16 items-center justify-between border-b bg-background px-6">
            <div className="flex w-full max-w-md items-center gap-2">
                <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search something..."
                        className="w-full bg-muted pl-9 md:w-[300px] lg:w-[400px]"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button>Add New</Button>

                <div className="flex items-center gap-2 text-muted-foreground">
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                        <Settings className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
                    </Button>
                </div>

                <div className="flex items-center gap-3 border-l pl-4">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium leading-none">Sara Abraham</p>
                        <p className="text-xs text-muted-foreground">View profile</p>
                    </div>
                    <Avatar>
                        <AvatarImage src="https://ui-avatars.com/api/?name=Sara+Abraham&background=0D8ABC&color=fff" alt="@shadcn" />
                        <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}
