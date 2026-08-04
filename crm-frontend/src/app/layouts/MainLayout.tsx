import { Outlet } from "react-router-dom";
import CompanyNavbar from "../../components/layout/CompanyNavbar";

export default function MainLayout() {
    return(
        <div className="bg-[#141414] w-full h-screen text-[#ECECEC] flex flex-col items-center ">

            <CompanyNavbar />

            <main className="w-[80%]">
                <Outlet />
            </main>
        </div>
    )
}