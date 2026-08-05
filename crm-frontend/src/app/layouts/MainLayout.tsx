import { Outlet } from "react-router-dom";

import { useLocation } from "react-router-dom";

import CompanyNavbar from "../../components/layout/CompanyNavbar";
import ProjectNavbar from "../../components/layout/ProjectNavbar";

export default function MainLayout() {

    const location = useLocation()
    const isIndividualCompanyRoute = location.pathname.includes("company")

    return(
        <div className="bg-[#141414] w-full h-screen text-[#ECECEC] flex flex-col items-center ">

            {isIndividualCompanyRoute ? <ProjectNavbar /> : <CompanyNavbar />}

            <main className="w-[80%]">
                <Outlet />
            </main>
        </div>
    )
}