import React from "react"
import { useNavigate } from "react-router-dom"

import { ChevronLeft } from "lucide-react";

export default function ProjectPage() {

    const navigate = useNavigate();

    return(
        <div className="w-full flex flex-col mb-12">
            <button onClick={() => navigate("/entrepeneurship/company/projects")} className="w-full flex flex-row items-center mt-12">
                <ChevronLeft/>
                <p>Regresar</p>
            </button>

            <div className="w-full flex justify-between mt-8">
                <p>Planeación</p>
                <p>Porcentaje: 88%</p>
            </div>

            <div className="w-full flex flex-row  bg-[#171717] rounded-lg shadow-lg p-6 mt-3 gap-12">
                <div className="w-1/3 bg-[#1A1A1A] flex flex-col rounded-md p-4 gap-3">
                    <p className="mb-2">To-do</p>

                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <p className="text-[#3550CB] text-center text-sm">+ Agregar tarea</p>
                </div>
                <div className="w-1/3 bg-[#1A1A1A] flex flex-col rounded-md p-4 gap-3">
                    <p className="mb-2">In progress</p>

                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                </div>
                <div className="w-1/3 bg-[#1A1A1A] flex flex-col rounded-md p-4 gap-3">
                    <p className="mb-2">Done</p>

                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                </div>  
            </div>

            <div className="border-b border-b-[#777777] w-full mt-8"></div>

            <div className="w-full flex justify-between mt-8">
                <p>Ejecución</p>
                <p>Porcentaje: 15%</p>
            </div>

            <div className="w-full flex flex-row  bg-[#171717] rounded-lg shadow-lg p-6 mt-3 gap-12">
                <div className="w-1/3 bg-[#1A1A1A] flex flex-col rounded-md p-4 gap-3">
                    <p className="mb-2">To-do</p>

                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                </div>
                <div className="w-1/3 bg-[#1A1A1A] flex flex-col rounded-md p-4 gap-3">
                    <p className="mb-2">In progress</p>
                </div>
                <div className="w-1/3 bg-[#1A1A1A] flex flex-col rounded-md p-4 gap-3">
                    <p className="mb-2">Done</p>
                </div>  
            </div>

            <div className="flex items-center justify-center w-full">
                <button className="w-1/4 rounded-md shadow-lg text-sm py-1 mt-8 bg-[#3550CB]">Ver avance reporte técnico</button>
            </div>

            <div className="border-b border-b-[#777777] w-full mt-8"></div>

            <div className="w-full flex justify-between mt-8">
                <p>Cierre</p>
                <p>Porcentaje: 0%</p>
            </div>

            <div className="w-full flex flex-row  bg-[#171717] rounded-lg shadow-lg p-6 mt-3 gap-12">
                <div className="w-1/3 bg-[#1A1A1A] flex flex-col rounded-md p-4 gap-3">
                    <p className="mb-2">To-do</p>

                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                </div>
                <div className="w-1/3 bg-[#1A1A1A] flex flex-col rounded-md p-4 gap-3">
                    <p className="mb-2">In progress</p>

                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>

                </div>
                <div className="w-1/3 bg-[#1A1A1A] flex flex-col rounded-md p-4 gap-3">
                    <p className="mb-2">Done</p>

                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                    <div className="w-full flex flex-col bg-[#212121] rounded-sm p-3">
                        <p className="text-sm">Carta de inicio</p>
                        <p className="text-sm text-[#959595]">Documento donde formalmente se da inicio con el ejercicio a realizar, se definen las fechas compromiso, actividades a realizar, limitaciones y alcance</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}