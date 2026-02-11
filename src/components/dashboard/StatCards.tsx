import { FileText, Code, PenTool, Smartphone, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
    { icon: PenTool, label: 'Content designers', count: 5, color: 'bg-blue-100 text-blue-600' },
    { icon: Code, label: 'PHP Developers', count: 8, color: 'bg-orange-100 text-orange-600' },
    { icon: Monitor, label: 'UI/UX Designer', count: 5, color: 'bg-purple-100 text-purple-600' },
    { icon: Smartphone, label: 'iOS Developer', count: 10, color: 'bg-green-100 text-green-600' },
    { icon: Smartphone, label: 'Android Developer', count: 10, color: 'bg-indigo-100 text-indigo-600' },
];

export function StatCards() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">You Need to hire</h3>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {stats.map((stat, index) => (
                    <Card key={index} className="border-none shadow-sm transition-shadow hover:shadow-md">
                        <CardContent className="flex flex-col items-center p-6 text-center">
                            <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <p className="text-sm font-medium text-foreground">{stat.label}</p>
                            <p className="text-xs text-muted-foreground">({stat.count} Candidates)</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
