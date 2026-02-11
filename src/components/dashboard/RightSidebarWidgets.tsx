"use client"
import { Calendar } from '@/components/ui/calendar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import React from 'react';

export function CalendarWidget() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <div className="rounded-xl border bg-card p-4 text-card-foreground shadow-sm">
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Schedule Calendar</h3>
            </div>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-none w-full"
            />
        </div>
    );
}

const applicants = [
    { name: 'Mike Tyson', role: 'iOS Developer', image: 'https://ui-avatars.com/api/?name=Mike+Tyson&background=random' },
    { name: 'Zara Thomas', role: 'Content Designer', image: 'https://ui-avatars.com/api/?name=Zara+Thomas&background=random' },
    { name: 'Neenu Abraham', role: 'Content Designer', image: 'https://ui-avatars.com/api/?name=Neenu+Abraham&background=random' },
    { name: 'John Samuel', role: 'iOS Developer', image: 'https://ui-avatars.com/api/?name=John+Samuel&background=random' },
];

export function ApplicantsList() {
    return (
        <div className="rounded-xl border bg-card p-4 text-card-foreground shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">New Applicants</h3>
                <span className="text-xs text-muted-foreground hover:underline cursor-pointer">View All</span>
            </div>
            <div className="space-y-4">
                {applicants.map((applicant, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src={applicant.image} />
                                <AvatarFallback>{applicant.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">{applicant.name}</p>
                                <p className="text-xs text-muted-foreground">{applicant.role}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500 bg-blue-50 hover:bg-blue-100 hover:text-blue-600">
                                <MessageCircle className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-indigo-500 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-600">
                                <Phone className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
