import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="">
            <div className="min-h-[calc(100vh-118px)] bg-white flex flex-col justify-center items-center text-center px-6 py-12">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                    Welcome to <span className="text-blue-600">MyAuthApp</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
                    A secure and fast way to manage your users. Build your authentication system with React and Firebase today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link to="register"> <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Get Started
                    </button></Link>
                    <button onClick={() => setShowModal(!showModal)} className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                        Learn More
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full relative pt-12"> {/* Added pt-12 to push content down */}

                        {/* Close Icon - Now has plenty of room */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 transition"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-xl font-bold mb-6 text-center px-4">How to use MyAuthApp?</h3>

                        <div className="text-gray-600 mb-6 space-y-3 text-sm md:text-base">
                            <p>Getting started is simple. Just follow these steps:</p>
                            <ul className="list-decimal pl-5 space-y-3">
                                <li>If you don't have an account, click the <Link className="text-blue-600 font-semibold underline" to="/register">Register</Link> button to sign up.</li>
                                <li>Once registered, go to the <Link className="text-blue-600 font-semibold underline" to="/login">Login</Link> page to access your account.</li>
                                <li>For a faster experience, use the <Link className="text-blue-600 font-semibold underline" to="/login">Sign in with Google</Link> button.</li>
                            </ul>
                        </div>

                        <button
                            onClick={() => setShowModal(false)}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;