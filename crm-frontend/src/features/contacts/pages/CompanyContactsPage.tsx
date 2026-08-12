import { useState } from "react"

import {motion} from "framer-motion"

import CreateButton from "../../../components/ui/buttons/CreateButton"
import ContactPopup from "../components/CompanyContactPopup"
import CompanyContactCard from "../components/CompanyContactCard"

export default function CompanyContactsPage() {

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    return(
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full flex flex-col">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Contacto" onClick={() => setIsOpenPopup(true)} />
            </div>

            <div className="w-full grid grid-cols-[20%_20%_20%_30%_10%] pt-8">
                <p className="text-[#959595]">Nombre</p>
                <p className="text-[#959595]">Puesto</p>
                <p className="text-[#959595]">Teléfono</p>
                <p className="text-[#959595]">Correo electrónico</p>
                <p className="text-[#959595] text-right">Principal</p>
            </div>

            <CompanyContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />
            <CompanyContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />
            <CompanyContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />
            <CompanyContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />
            <CompanyContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />
            <CompanyContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />

            {isOpenPopup && (
                <div
                    className="fixed inset-0  flex items-center justify-center z-50"
                    onClick={() => setIsOpenPopup(false)}
                >
                        <ContactPopup onClose={() => setIsOpenPopup(false)} />
                </div>
            )}
        </motion.div>
    )
}