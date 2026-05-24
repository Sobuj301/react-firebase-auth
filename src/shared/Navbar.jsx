import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Home, LayoutDashboard, LogOut, UserPlus } from "lucide-react";

const Navbar = () => {

    const { user, userSingOut } = useContext(AuthContext)

    const handleSignOut = () => {
        userSingOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                // setError(error.message)
            })
    }


    return (
        <nav className="bg-white shadow-lg border border-slate-300">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="font-bold text-lg text-blue-600">
                        MyAuthApp
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-4">
                        <a href="/" className="text-gray-700 hover:text-blue-600">
                            <Home size={20} />
                        </a>

                            <a href="/dashboard" className="text-gray-700 hover:text-blue-600">
                                <LayoutDashboard size={20} />
                            </a>
                       

                        {user ? (
                            <button
                                onClick={handleSignOut}
                                className="text-red-500 hover:text-red-600 transition"
                            >
                                <LogOut size={20} />
                            </button>
                        ) : (
                            <a href="/register" className="text-gray-700 hover:text-blue-600">
                                <UserPlus size={20} />
                            </a>
                        )}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;