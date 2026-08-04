import { Menu } from "lucide-react"

export default function ProjectNavbar() {

    return(
        <div className="w-[90%] flex flex-row items-center">
            <div>
                <Menu />
            </div>

            <div>
                <p className="font-bold">Evaluacion Vulnerabilidades</p>
            </div>

            <div className="flex flex-row justify-between w-[40%]">
                <p>Empresas</p>
                <p>Finanzas</p>
                <p>Templates</p>
                <p>Contactos</p>
                <p>Actividades</p>
            </div>

        </div>
    )
}