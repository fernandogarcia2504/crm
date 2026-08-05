import CreateButton from "../../../components/ui/buttons/CreateButton";

import { List } from "lucide-react";
import { Calendar } from "lucide-react";

export default function ProjectPage() {

    return(
        <div className="w-full flex flex-col">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Proyecto" />
            </div>

            <div className="w-full grid grid-cols-3 gap-12 mt-12">

                <div className="bg-[#1A1A1A] rounded-md shadow-lg px-4 py-4">
                    <p>Primer semestre 2026</p>
                    <div className="border-b border-b-[#777777]"></div>
                    <div className="flex justify-between pt-2">
                        <div className="flex gap-1 items-center">
                            <List size={15} />
                            <p className="text-sm text-[#959595]">12/15</p>

                        </div>
                        <p className="text-sm text-[#959595]">12% Completado</p>
                    </div>
                    <div className="rounded-2xl w-full bg-slate-300 h-1 mt-2">
                        <div className="rounded-2xl w-[46%] h-full bg-[#2F76D2] "></div>
                    </div>
                    <div className="flex gap-1 items-center mt-2">
                        <Calendar size={15} />
                        <p className="text-sm text-[#959595]">Fecha límite</p>
                    </div>
                    <p className="text-sm mt-2">12 de agosto de 2026</p>
                </div>

                <div className="bg-[#1A1A1A] rounded-md shadow-lg px-4 py-4">
                    <p>Primer semestre 2026</p>
                    <div className="border-b border-b-[#777777]"></div>
                    <div className="flex justify-between pt-2">
                        <div className="flex gap-1 items-center">
                            <List size={15} />
                            <p className="text-sm text-[#959595]">12/15</p>

                        </div>
                        <p className="text-sm text-[#959595]">12% Completado</p>
                    </div>
                    <div className="rounded-2xl w-full bg-slate-300 h-1 mt-2">
                        <div className="rounded-2xl w-[46%] h-full bg-[#2F76D2] "></div>
                    </div>
                    <div className="flex gap-1 items-center mt-2">
                        <Calendar size={15} />
                        <p className="text-sm text-[#959595]">Fecha límite</p>
                    </div>
                    <p className="text-sm mt-2">12 de agosto de 2026</p>
                </div>

                <div className="bg-[#1A1A1A] rounded-md shadow-lg px-4 py-4">
                    <p>Primer semestre 2026</p>
                    <div className="border-b border-b-[#777777]"></div>
                    <div className="flex justify-between pt-2">
                        <div className="flex gap-1 items-center">
                            <List size={15} />
                            <p className="text-sm text-[#959595]">12/15</p>

                        </div>
                        <p className="text-sm text-[#959595]">12% Completado</p>
                    </div>
                    <div className="rounded-2xl w-full bg-slate-300 h-1 mt-2">
                        <div className="rounded-2xl w-[46%] h-full bg-[#2F76D2] "></div>
                    </div>
                    <div className="flex gap-1 items-center mt-2">
                        <Calendar size={15} />
                        <p className="text-sm text-[#959595]">Fecha límite</p>
                    </div>
                    <p className="text-sm mt-2">12 de agosto de 2026</p>
                </div>

                <div className="bg-[#1A1A1A] rounded-md shadow-lg px-4 py-4">
                    <p>Primer semestre 2026</p>
                    <div className="border-b border-b-[#777777]"></div>
                    <div className="flex justify-between pt-2">
                        <div className="flex gap-1 items-center">
                            <List size={15} />
                            <p className="text-sm text-[#959595]">12/15</p>

                        </div>
                        <p className="text-sm text-[#959595]">12% Completado</p>
                    </div>
                    <div className="rounded-2xl w-full bg-slate-300 h-1 mt-2">
                        <div className="rounded-2xl w-[46%] h-full bg-[#2F76D2] "></div>
                    </div>
                    <div className="flex gap-1 items-center mt-2">
                        <Calendar size={15} />
                        <p className="text-sm text-[#959595]">Fecha límite</p>
                    </div>
                    <p className="text-sm mt-2">12 de agosto de 2026</p>
                </div>

            </div>
        </div>
    )
}