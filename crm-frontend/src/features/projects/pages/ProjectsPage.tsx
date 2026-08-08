import { useState } from "react";

import {motion} from "framer-motion";

import ContactCard from "../../contacts/components/ContactCard";
import ProjectCard from "../components/ProjectCard";
import CreateButton from "../../../components/ui/buttons/CreateButton";
import ProjectPopup from "../components/ProjectPopup";

export default function ProjectsPage() {

    const [isOpenPopup, setIsOpenPopup] = useState(false);

   return(
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full flex flex-col">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Proyecto" onClick={() => setIsOpenPopup(true)} />
            </div>

            <div className="w-full grid grid-cols-3 gap-12 mt-12">

                <ProjectCard title="Primer Semestre 2026" tasks="12/15" percentage="35" date="12 de agosto de 2026" />
                <ProjectCard title="Primer Semestre 2026" tasks="12/15" percentage="35" date="12 de agosto de 2026" />
                <ProjectCard title="Primer Semestre 2026" tasks="12/15" percentage="35" date="12 de agosto de 2026" />
                <ProjectCard title="Primer Semestre 2026" tasks="12/15" percentage="35" date="12 de agosto de 2026" />
                <ProjectCard title="Primer Semestre 2026" tasks="12/15" percentage="35" date="12 de agosto de 2026" />
                <ProjectCard title="Primer Semestre 2026" tasks="12/15" percentage="35" date="12 de agosto de 2026" />
                <ProjectCard title="Primer Semestre 2026" tasks="12/15" percentage="35" date="12 de agosto de 2026" />
                <ProjectCard title="Primer Semestre 2026" tasks="12/15" percentage="35" date="12 de agosto de 2026" />

            </div>

            {isOpenPopup && (
                <div
                    className="fixed inset-0  flex items-center justify-center z-50"
                    onClick={() => setIsOpenPopup(false)}
                >
                    <ProjectPopup onClose={() => setIsOpenPopup(false)} />
                </div>
            )}
        </motion.div>
    )
}