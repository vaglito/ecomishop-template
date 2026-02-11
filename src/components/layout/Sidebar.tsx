'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  FileText,
  ClipboardList,
  Calendar,
  GraduationCap,
  LogOut,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const sidebarItems = [
  { icon: LayoutGrid, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Recruitment', href: '/dashboard/recruitment' },
  { icon: FileText, label: 'Interview', href: '/dashboard/interview' },
  { icon: ClipboardList, label: 'Onboarding', href: '/dashboard/onboarding' },
  { icon: ClipboardList, label: 'Interview Task', href: '/dashboard/tasks' },
  { icon: Calendar, label: 'Appointments', href: '/dashboard/appointments' },
  { icon: GraduationCap, label: 'Training', href: '/dashboard/training' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            H
          </div>
          <span>Hireism</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item, index) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                  isActive ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm hover:bg-sidebar-primary hover:text-sidebar-primary-foreground' : 'text-muted-foreground'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
