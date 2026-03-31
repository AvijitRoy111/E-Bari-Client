import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* Content */}
            <div className="flex-1 overflow-auto mb-20">
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}
