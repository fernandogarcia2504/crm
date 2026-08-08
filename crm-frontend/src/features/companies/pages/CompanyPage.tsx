import {motion} from "framer-motion"

import CreateButton from "../../../components/ui/buttons/CreateButton"

export default function CompanyPage() {
    return(
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full flex flex-col">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Empresa" />
            </div>

            <div className="w-full grid grid-cols-[2.5fr_2.5fr_2fr_1fr_2fr] pt-12">
                <p className="text-[#959595] ">Empresa</p>
                <p className="text-[#959595] ">Estado</p>
                <p className="text-[#959595] ">Oportunidad</p>
                <p className="text-[#959595] ">Proyecto</p>
                <p className="text-[#959595] text-right">Última actualización</p>
            </div>

            <div className="w-full grid grid-cols-[2.5fr_2.5fr_2fr_1fr_2fr] pt-4">
                <p>Nu</p>
                <p>Cliente</p>
                <p className="">Propuesta</p>
                <p>Si</p>
                <p className="text-right">25 jul 2026</p>
            </div>
            <div className="w-full grid grid-cols-[2.5fr_2.5fr_2fr_1fr_2fr] pt-4">
                <p>Nu</p>
                <p>Cliente</p>
                <p className="">Propuesta</p>
                <p>Si</p>
                <p className="text-right">25 jul 2026</p>
            </div>
            <div className="w-full grid grid-cols-[2.5fr_2.5fr_2fr_1fr_2fr] pt-4">
                <p>Nu</p>
                <p>Cliente</p>
                <p className="">Propuesta</p>
                <p>Si</p>
                <p className="text-right">25 jul 2026</p>
            </div>
        </motion.div>
    )
}