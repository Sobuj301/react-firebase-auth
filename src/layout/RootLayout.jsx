import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

const RootLayout = () => {

    // const { loading } = useContext(AuthContext)

    return (
        <div className="min-h-screen p-0 m-0">
            <Navbar />
            <main className="">
                {/* {loading ? <div className="min-h-[calc(100vh-118px)] flex justify-center items-center">
                    <span className="text-xl font-bold">Loading...</span>
                </div> : } */}
                <Outlet></Outlet>
            </main>

            <Footer />
        </div>
    );
};

export default RootLayout;