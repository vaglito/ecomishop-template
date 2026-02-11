import { WelcomeBanner } from '@/components/dashboard/WelcomeBanner';
import { StatCards } from '@/components/dashboard/StatCards';
import { RecruitmentTable } from '@/components/dashboard/RecruitmentTable';
import { CalendarWidget, ApplicantsList } from '@/components/dashboard/RightSidebarWidgets';

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-6 xl:flex-row">
            <div className="flex-1 space-y-6">
                <WelcomeBanner />
                <StatCards />
                <RecruitmentTable />
            </div>
            <div className="w-full space-y-6 xl:w-80">
                <CalendarWidget />
                <ApplicantsList />
            </div>
        </div>
    );
}
