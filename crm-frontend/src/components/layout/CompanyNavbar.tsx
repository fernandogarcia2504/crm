import { NavLink } from "react-router-dom"

import { Menu } from "lucide-react"

export default function CompanyNavbar() {

    return(
        <div className="w-[80%] flex flex-row items-center py-4 gap-12">
            <div>
                <Menu />
            </div>

            <div className="w-full flex items-center gap-12 border-b border-b-[#777777] py-4">
                <div className="flex-1">
                    <p className="font-bold">Evaluacion Vulnerabilidades</p>
                </div>

                <div className="flex gap-12">
                    <NavLink to={"/entrepeneurship/companies"} className={({ isActive }) => isActive ? "text-[#2F76D2]" : "text-[#ECECEC]"}>Empresas</NavLink>
                    <NavLink to={"/entrepeneurship/finances"} className={({ isActive }) => isActive ? "text-[#2F76D2]" : "text-[#ECECEC]"}>Finanzas</NavLink>
                    <NavLink to={"/entrepeneurship/templates"} className={({ isActive }) => isActive ? "text-[#2F76D2]" : "text-[#ECECEC]"}>Templates</NavLink>
                    <NavLink to={"/entrepeneurship/contacts"} className={({ isActive }) => isActive ? "text-[#2F76D2]" : "text-[#ECECEC]"}>Contactos</NavLink>

                </div>

                <div className="flex-1" />

            </div>


        </div>
    )
}