import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

    const { user } = useContext(AuthContext)

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <div className="font-bold text-xl text-blue-600">
                        MyAuthApp
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-4">
                        <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>

                        {user ? (
                            // ইউজার লগইন করা থাকলে Logout বাটন দেখাবে
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        ) : (
                            // ইউজার লগইন করা না থাকলে Register বাটন দেখাবে
                            <a href="/register" className="text-gray-700 hover:text-blue-600">Register</a>
                        )}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;