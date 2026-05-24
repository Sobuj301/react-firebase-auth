
const Home = () => {
    return (
        <div className="md:h-[calc(100vh-116px)] bg-white flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
                Welcome to <span className="text-blue-600">MyAuthApp</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl">
                A secure and fast way to manage your users. Build your authentication system with React and Firebase today.
            </p>

            <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Home;