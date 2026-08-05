import { Menu } from "lucide-react"

export default function ProjectNavbar() {

    return(
        <div className="w-[80%] flex flex-row items-center py-4 gap-12">
            <div>
                <Menu />
            </div>

            <div className="w-full flex items-center gap-12 border-b border-b-[#777777] py-4">
                <div className="flex-1">
                    <p className="font-bold">Mercado Pago</p>
                </div>

                <div className="flex gap-12">
                    <p className="text-[#2F76D2]">Resumen</p>
                    <p>Contactos</p>
                    <p>Proyectos</p>
                    <p>Documentos</p>
                    <p>Actividades</p>
                </div>

                <div className="flex-1" />

            </div>


        </div>
    )
}