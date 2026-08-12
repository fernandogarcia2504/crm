import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { Menu } from "lucide-react"

export default function ProjectNavbar() {

    const navigate = useNavigate();

    return(
        <div className="w-[80%] flex flex-row items-center py-4 gap-12">
            <div>
                <Menu />
            </div>

            <div className="w-full flex items-center gap-12 border-b border-b-[#777777] py-4">
                <div className="flex-1">
                    <p onClick={() => navigate("/entrepeneurship/companies")} className="font-bold cursor-pointer">Mercado Pago</p>
                </div>

                <div className="flex gap-12">
                    <NavLink to={"/entrepeneurship/company/resume"} className={({ isActive }) => isActive ? "text-[#2F76D2]" : "text-[#ECECEC]"}>Resumen</NavLink>
                    <NavLink to={"/entrepeneurship/company/contacts"} className={({ isActive }) => isActive ? "text-[#2F76D2]" : "text-[#ECECEC]"}>Contactos</NavLink>
                    <NavLink to={"/entrepeneurship/company/projects"} className={({ isActive }) => isActive ? "text-[#2F76D2]" : "text-[#ECECEC]"}>Proyectos</NavLink>
                    <NavLink to={"/entrepeneurship/company/documents"} className={({ isActive }) => isActive ? "text-[#2F76D2]" : "text-[#ECECEC]"}>Documentos</NavLink>
                    <NavLink to={"/entrepeneurship/company/activities"} className={({ isActive }) => isActive ? "text-[#2F76D2]" : "text-[#ECECEC]"}>Actividades</NavLink>

                </div>

                <div className="flex-1" />

            </div>


        </div>
    )
}