import { useState } from "react";

import {motion} from "framer-motion"

import DocumentsPopup from "../components/DocumentsPopup";
import CreateButton from "../../../components/ui/buttons/CreateButton"
import DocumentCard from "../components/DocumentCard"

export default function DocumentsPage() {

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    return(
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full flex flex-col">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Documento" onClick={() => setIsOpenPopup(true)}/>
            </div>

            <div className="w-full grid grid-cols-[20%_10%_20%_40%_10%] pt-12">
                <p className="text-[#959595] ">Nombre del archivo</p>
                <p className="text-[#959595] ">Tamaño</p>
                <p className="text-[#959595] ">Categoría</p>
                <p className="text-[#959595] ">Notas</p>
                <p className="text-[#959595] ">Eliminar</p>
            </div>

            <DocumentCard name="Reporte Tecnico WebGoat.docx" size="15 MB" category="Reporte Tecnico" notes="V1.3 del documento final, falta documentacion de pruebas con nessus" />
            <DocumentCard name="Factura evaluacion primer semestre.pdf" size="15 MB" category="Factura" notes="Factura" />

            {isOpenPopup && (
                <div
                    className="fixed inset-0  flex items-center justify-center z-50"
                    onClick={() => setIsOpenPopup(false)}
                >
                    <DocumentsPopup onClose={() => setIsOpenPopup(false)} />
                </div>
            )}
        </motion.div>
    )
}