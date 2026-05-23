
const Navbar = () => {

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <div className="font-bold text-xl text-blue-600">
                        MyAuthApp
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4">
                        <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
                        <a href="/register" className="text-gray-700 hover:text-blue-600">Register</a>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;