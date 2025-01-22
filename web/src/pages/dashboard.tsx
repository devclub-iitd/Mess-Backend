import { FaUsers, FaUtensils, FaMoneyBillWave } from 'react-icons/fa';
import { MdAnnouncement } from 'react-icons/md';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        Welcome to Mess Management System
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">Manage your mess operations efficiently</p>
                </div>
                <ThemeToggle />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Total Students Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                        <FaUsers className="text-3xl text-blue-500 mr-4" />
                        <div>
                            <p className="text-gray-600 dark:text-gray-400">Total Students</p>
                            <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">150</p>
                        </div>
                    </div>
                </div>

                {/* Today's Menu Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                        <FaUtensils className="text-3xl text-green-500 mr-4" />
                        <div>
                            <p className="text-gray-600 dark:text-gray-400">Today's Meals</p>
                            <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">3</p>
                        </div>
                    </div>
                </div>

                {/* Monthly Collection Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                        <FaMoneyBillWave className="text-3xl text-yellow-500 mr-4" />
                        <div>
                            <p className="text-gray-600 dark:text-gray-400">Monthly Collection</p>
                            <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">₹45,000</p>
                        </div>
                    </div>
                </div>

                {/* Announcements Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                        <MdAnnouncement className="text-3xl text-purple-500 mr-4" />
                        <div>
                            <p className="text-gray-600 dark:text-gray-400">Announcements</p>
                            <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">2</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                        Add Student
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                        Update Menu
                    </button>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
                        Make Announcement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;