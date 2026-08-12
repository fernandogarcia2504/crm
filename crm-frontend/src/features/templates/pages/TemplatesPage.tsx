import { useState } from "react";

import {motion} from "framer-motion";

import CreateButton from "../../../components/ui/buttons/CreateButton";
import TemplatesCard from "../components/TemplateCard";

export default function TemplatesPage() {

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    return(
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full flex flex-col pb-16 ">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Template" onClick={() => setIsOpenPopup(true)} />
            </div>

            <div className="w-full grid grid-cols-3 gap-12 mt-12">

                <TemplatesCard name="Reporte Técnico" notes="Comunicar de manera clara, precisa y objetiva los resultados, hallazgos y conclusiones de la evaluacion de vulnerabilidades." status="Cierre" />
                <TemplatesCard name="Reporte Técnico" notes="Comunicar de manera clara, precisa y objetiva los resultados, hallazgos y conclusiones de la evaluacion de vulnerabilidades." status="Cierre" />
                <TemplatesCard name="Reporte Técnico" notes="Comunicar de manera clara, precisa y objetiva los resultados, hallazgos y conclusiones de la evaluacion de vulnerabilidades." status="Cierre" />
                <TemplatesCard name="Reporte Técnico" notes="Comunicar de manera clara, precisa y objetiva los resultados, hallazgos y conclusiones de la evaluacion de vulnerabilidades." status="Cierre" />
                <TemplatesCard name="Reporte Técnico" notes="Comunicar de manera clara, precisa y objetiva los resultados, hallazgos y conclusiones de la evaluacion de vulnerabilidades." status="Cierre" />
                <TemplatesCard name="Reporte Técnico" notes="Comunicar de manera clara, precisa y objetiva los resultados, hallazgos y conclusiones de la evaluacion de vulnerabilidades." status="Cierre" />
                <TemplatesCard name="Reporte Técnico" notes="Comunicar de manera clara, precisa y objetiva los resultados, hallazgos y conclusiones de la evaluacion de vulnerabilidades." status="Cierre" />

            </div>

        </motion.div>
    )
}