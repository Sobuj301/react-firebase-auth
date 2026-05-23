import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
    const [error, setError] = useState('')
    const [loading,setLoading] = useState(false)
    const { createUser } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        const email = e.target.email.value;
        const password = e.target.password.value;


        createUser(email, password)
            .then(result => {
                Swal.fire({
                    title: "Good job!",
                    text: "Registration successful !",
                    icon: "success"
                });
                setLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
            })

    }
    return (
        <section className="h-[calc(100vh-112px)] w-full bg-white flex flex-col justify-center items-center px-4">
            <form onSubmit={handleSignUp} className="w-full max-w-sm">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                    Create Account
                </h2>

                <div className="space-y-4">
                    <input
                    required
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <input
                    required
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        {
                            loading ? "Signing up..." : "SingUp"
                        }
                    </button>
                </div>

                <span className="text-red-500 text-sm mt-4 text-center">{error}</span>
            </form>


        </section>
    );
};

export default Register;