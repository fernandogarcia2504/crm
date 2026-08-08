import { Check, X } from "lucide-react";

interface ActivityPopupProps {
    onClose: () => void;
}

export default function ActivityPopup({onClose}: ActivityPopupProps) {

    return(
        <form action="" onClick={(e) => e.stopPropagation()} className="w-[27%] bg-[#1A1A1A]  flex flex-col p-4 gap-6">

            <button type="button" onClick={onClose}> <X size={14} /></button>

            <div className="flex gap-2">
                <Check />
                <p>Agregar una actividad</p>
            </div>

            <div className="w-full flex flex-col gap-3">
                <p className="text-sm">Categoría</p>
                <input type="text" className="w-full rounded-md px-3 py-1 bg-[#212121] placeholder:text-sm" placeholder="Selecciona una categoría" />
            </div>

            <div className="w-full flex flex-col gap-3">
                <p className="text-sm">Tipo</p>
                <input type="text" className="w-full rounded-md px-3 py-1 bg-[#212121] placeholder:text-sm" placeholder="Selecciona un tipo" />
            </div>

            <div className="w-full flex flex-col gap-3">
                <p className="text-sm">Título</p>
                <input type="text" className="w-full rounded-md px-3 py-1 bg-[#212121] placeholder:text-sm" placeholder="Ingresa el título de la actividad..." />
            </div>

            <div className="w-full flex flex-col gap-3">
                <p className="text-sm">Nota</p>
                <input type="text" className="w-full h-24 rounded-md px-3 py-1 bg-[#212121] placeholder:text-sm" placeholder="Ingresa una nota..." />
            </div>

            <div className="w-full flex flex-col gap-3">
                <p className="text-sm">Próximos pasos</p>
                <input type="text" className="w-full h-24 rounded-md px-3 py-1 bg-[#212121] placeholder:text-sm" placeholder="Ingresa los próximos pasos a realizar..." />
            </div>



            <div className="w-full flex gap-3">
                <div className="w-1/2 flex flex-col gap-3">
                    <p className="text-sm">Resultado</p>
                    <input type="text" className="w-full rounded-md px-3 py-1 bg-[#212121] placeholder:text-sm" />
                </div>
                <div className="w-1/2 flex flex-col gap-3">
                    <p className="text-sm">Fecha agendada</p>
                    <input type="text" className="w-full rounded-md px-3 py-1 bg-[#212121] placeholder:text-sm" />
                </div>
            </div>

            <div className="w-1/2 flex flex-col gap-3">
                <p className="text-sm">Completado</p>
                <input type="text" className="w-full rounded-md px-3 py-1 bg-[#212121]" />
            </div>

            <div className="flex justify-center">
                <button className="w-1/3 bg-[#2F76D2] rounded-md px-2 py-1">Subir archivo</button>
            </div>
        </form>
    )
}