import { Header } from '@/components/layout/Header';
import { AppSidebar } from '@/components/layout/Sidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger className="-ml-1" />
                    </div>
                    <div className="flex-1">
                        <Header />
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6 scroll-smooth bg-muted/40">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
