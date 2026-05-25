import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router";

const Login = () => {

    const location = useNavigate()
    const pathName = useLocation()

    const [error, setError] = useState('')
    const { userLogin, googleSignIn } = useContext(AuthContext)



    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                location(pathName.state || "/")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
            .then(result => {
                location(pathName.state || "/")
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="min-h-[calc(100vh-118px)] w-full flex justify-center items-center overflow-hidden bg-gray-50">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        name='email'
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        name='password'
                        type="password"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition duration-200"
                >
                    Login
                </button>

                {/* --- Social Login Button Added Below --- */}
                <div className="mt-6">
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-2 bg-gray-100 border border-gray-300 text-gray-700 p-3 rounded font-semibold hover:bg-gray-200 transition duration-200"
                    >
                        {/* Ensure you have an icon or just text here */}
                        Sign in with Google
                    </button>
                </div>

                {error && (
                    <p className="text-red-500 text-sm mt-4 text-center">
                        {error}
                    </p>
                )}

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-600 font-semibold hover:underline">
                        Please register
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;