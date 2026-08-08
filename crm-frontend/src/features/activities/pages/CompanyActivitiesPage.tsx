import { useState } from "react";

import ActivityPopup from "../components/ActivityPopup";
import CreateButton from "../../../components/ui/buttons/CreateButton"
import ActivityCard from "../components/ActivityCard"

export default function CompanyActivitiesPage() {

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    return(
        <div className="w-full flex flex-col pb-12">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Actividad" onClick={() => setIsOpenPopup(true)} />
            </div>

            <div className="w-full flex flex-col rounded-lg shadow-lg bg-[#171717] px-4 py-5 gap-4 mt-8">
                <p className="px-3">Secuencia de actividades</p>

                <div className="w-full rounded-md flex flex-col gap-3 bg-[#212121] p-3 ">
                    <div className="flex gap-2 items-center">
                        <p className="text-sm text-[#959595] ">Etapa: </p>
                        <p className="text-sm ">Reconocimiento</p>
                    </div>

                    <div className="flex gap-8 items-center">
                        <p className="text-sm text-[#959595]">12 Actividades registradas</p>
                        <p className="text-sm text-[#959595]">Acercamiento inicial 12 abril 2026</p>
                        <p className="text-sm text-[#959595]">1 Projecto Cerrado</p>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-8">
                    <ActivityCard subject="Llamada con CISO (Fabiola Vega)" nextStep="Agendar sesion demostracion por zoom para el 15 de agosto a las 11 am" date="Mar 25, 2026 a las 10:30 am" result="Completado" type="call"  />
                    <ActivityCard subject="Llamada con CISO (Fabiola Vega)" nextStep="Agendar sesion demostracion por zoom para el 15 de agosto a las 11 am" date="Mar 25, 2026 a las 10:30 am" result="Completado" type="email"  />
                    <ActivityCard subject="Llamada con CISO (Fabiola Vega)" nextStep="Agendar sesion demostracion por zoom para el 15 de agosto a las 11 am" date="Mar 25, 2026 a las 10:30 am" result="Completado" type="meeting" />
                    <ActivityCard subject="Llamada con CISO (Fabiola Vega)" nextStep="Agendar sesion demostracion por zoom para el 15 de agosto a las 11 am" date="Mar 25, 2026 a las 10:30 am" result="Completado" type="note"  />
                    <ActivityCard subject="Llamada con CISO (Fabiola Vega)" nextStep="Agendar sesion demostracion por zoom para el 15 de agosto a las 11 am" date="Mar 25, 2026 a las 10:30 am" result="Completado" type="email"  />
                    <ActivityCard subject="Llamada con CISO (Fabiola Vega)" nextStep="Agendar sesion demostracion por zoom para el 15 de agosto a las 11 am" date="Mar 25, 2026 a las 10:30 am" result="Completado" type="meeting" />
                    <ActivityCard subject="Llamada con CISO (Fabiola Vega)" nextStep="Agendar sesion demostracion por zoom para el 15 de agosto a las 11 am" date="Mar 25, 2026 a las 10:30 am" result="Completado" type="call"  />
                    <ActivityCard subject="Llamada con CISO (Fabiola Vega)" nextStep="Agendar sesion demostracion por zoom para el 15 de agosto a las 11 am" date="Mar 25, 2026 a las 10:30 am" result="Completado" type="email"  />
                    <ActivityCard subject="Llamada con CISO (Fabiola Vega)" nextStep="Agendar sesion demostracion por zoom para el 15 de agosto a las 11 am" date="Mar 25, 2026 a las 10:30 am" result="Completado" type="note" isLast />
                </div>


            </div>

            {isOpenPopup && (
                <div
                    className="fixed inset-0  flex items-center justify-center z-50"
                    onClick={() => setIsOpenPopup(false)}
                >
                    <ActivityPopup onClose={() => setIsOpenPopup(false)} />
                </div>
            )}

        </div>
    )
}