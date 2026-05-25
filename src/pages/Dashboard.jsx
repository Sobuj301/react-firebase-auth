const Dashboard = () => {
    return (
        <div className="md:h-[calc(100vh-118px)] bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-xl font-semibold text-blue-600">Profile Overview</h2>
                        <p className="text-gray-600 mt-2">View and manage your personal profile information here.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-xl font-semibold text-blue-600">Settings</h2>
                        <p className="text-gray-600 mt-2">Click here to update your account preferences and settings.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;