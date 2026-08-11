import { useNavigate } from "react-router-dom"

import {motion} from "framer-motion"

import CreateButton from "../../../components/ui/buttons/CreateButton"
import CompanyCard from "../componentes/CompanyCard";

export default function CompanyPage() {

    const navigate = useNavigate();

    return(
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full flex flex-col">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Empresa" />
            </div>

            <div className="w-full grid grid-cols-[20%_10%_25%_25%_20%] pt-12">
                <p className="text-[#959595] ">Empresa</p>
                <p className="text-[#959595] ">Tamaño</p>
                <p className="text-[#959595] ">Sitio Web</p>
                <p className="text-[#959595] ">Estatus</p>
                <p className="text-[#959595] text-right">Última actualización</p>
            </div>

            <CompanyCard name="Banco Azteca" companySize="20/50" website="bancoazteca.com" status="Negociacion" last_update="25 jul 2026" />
        </motion.div>
    )
}