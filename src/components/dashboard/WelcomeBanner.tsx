import { Button } from '@/components/ui/button';

export function WelcomeBanner() {
    return (
        <div className="relative overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 p-6 md:p-8 text-white shadow-lg">
            <div className="relative z-10 max-w-2xl">
                <h2 className="mb-2 text-2xl md:text-3xl font-bold">Good Morning Sara</h2>
                <p className="mb-6 text-sm md:text-base text-blue-100">
                    You have 75 new applications. It is a lot of work for today! So let's start.
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                    Review It
                </Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
                {/* Abstract shape or illustration placeholder */}
                <div className="h-full w-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/40 to-transparent" />
            </div>
        </div>
    );
}


