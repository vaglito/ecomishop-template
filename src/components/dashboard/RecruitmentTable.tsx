import { MoreHorizontal } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const candidates = [
    { name: 'John Doe', role: 'UI/UX Designer', status: 'Tech Interview', color: 'bg-blue-500' },
    { name: 'Sam Emmanuel', role: 'UI/UX Designer', status: 'Task', color: 'bg-orange-500' },
    { name: 'John Samuel', role: 'PHP Developer', status: 'Resume Review', color: 'bg-indigo-500' },
    { name: 'Sam Emmanuel', role: 'UI/UX Designer', status: 'Task', color: 'bg-orange-500' },
    { name: 'John Doe', role: 'Content Designer', status: 'Final Interview', color: 'bg-red-500' },
];

export function RecruitmentTable() {
    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="flex items-center justify-between p-6">
                <h3 className="font-semibold leading-none tracking-tight">Recruitment Progress</h3>
                <Button variant="secondary" size="sm">View All</Button>
            </div>
            <div className="p-0 overflow-x-auto">
                <Table className="min-w-[600px]">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Full Name</TableHead>
                            <TableHead>Designation</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {candidates.map((candidate, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{candidate.name}</TableCell>
                                <TableCell>{candidate.role}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <div className={`h-2.5 w-2.5 rounded-full ${candidate.color}`} />
                                        <span>{candidate.status}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>View details</DropdownMenuItem>
                                            <DropdownMenuItem>Contact</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div >
        </div >
    );
}
