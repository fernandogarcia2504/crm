import ProjectCard from "../components/ProjectCard";
import CreateButton from "../../../components/ui/buttons/CreateButton";

export default function ProjectsPage() {

   return(
        <div className="w-full flex flex-col">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Proyecto" />
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
        </div>
    )
}