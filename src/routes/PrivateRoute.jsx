import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const navigate = useLocation()
    console.log(navigate)

    if (loading) {
        return <div className="md:h-[calc(100vh-122px)] flex justify-center items-center">
            <span className="text-xl font-bold">Loading...</span>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={navigate.pathname}></Navigate>

};

export default PrivateRoute;