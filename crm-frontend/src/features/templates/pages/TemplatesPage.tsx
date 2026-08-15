import { useState } from "react";

import {motion} from "framer-motion";

import CreateButton from "../../../components/ui/buttons/CreateButton";
import TemplatesCard from "../components/TemplateCard";

import { useTemplates } from "../hooks/useTemplates";

export default function TemplatesPage() {

    const businessId = localStorage.getItem("businessId");

    const {templates, loading, error} = useTemplates(businessId) 
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    return(
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full flex flex-col pb-16 ">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Template" onClick={() => setIsOpenPopup(true)} />
            </div>

            <div className="w-full grid grid-cols-3 gap-12 mt-12">

                {loading && (
                    <p className="mt-8 text-[#959595]">
                        Cargando empresas...
                    </p>
                )}


                {error && (
                    <p className="mt-8 text-red-400">
                        {error}
                    </p>
                )}

                {!loading && !error && (
                    templates?.map((serviceTemplate) => (
                        <TemplatesCard key={serviceTemplate._id} serviceTemplate={serviceTemplate} />
                    ))
                )}

            </div>

        </motion.div>
    )
}