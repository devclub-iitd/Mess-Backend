import { ThemeToggle } from '@/components/ui/theme-toggle';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            {/* Header Section */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        Welcome to Mess Management System
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">Manage your mess operations efficiently</p>
                </div>
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Dashboard;