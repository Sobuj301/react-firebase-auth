import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const RootLayout = () => {
    return (
        <div className="min-h-screen p-0 m-0">
            <Navbar />
            <main className="">
                <Outlet></Outlet>
            </main>

            <Footer />
        </div>
    );
};

export default RootLayout;