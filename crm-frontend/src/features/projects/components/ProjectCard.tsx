import { useNavigate } from "react-router-dom";

import { List } from "lucide-react";
import { Calendar } from "lucide-react";

interface SetProjectsProps {
    title: string;
    tasks: string;
    percentage: string;
    date: string;
}

export default function ProjectCard({title, tasks, percentage, date}: SetProjectsProps) {

    const navigate = useNavigate();

    return(
        <button onClick={() => navigate("/entrepeneurship/company/projects/project")} className="bg-[#1A1A1A] rounded-md shadow-lg px-4 py-4">
            <p className="text-start">{title}</p>
            <div className="border-b border-b-[#777777]"></div>
            <div className="flex justify-between pt-2">
                <div className="flex gap-1 items-center">
                    <List size={15} />
                    <p className="text-sm text-[#959595]">{tasks}</p>

                </div>
                <p className="text-sm text-[#959595]">{percentage} Completado</p>
            </div>
            <div className="rounded-2xl w-full bg-slate-300 h-1 mt-2">
                <div className="rounded-2xl w-[46%] h-full bg-[#2F76D2] "></div>
            </div>
            <div className="flex gap-1 items-center mt-2">
                <Calendar size={15} />
                <p className="text-sm text-[#959595]">Fecha límite</p>
            </div>
            <p className="text-sm mt-2">{date}</p>
        </button>
    )
}