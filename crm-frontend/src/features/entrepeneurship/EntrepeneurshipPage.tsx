
import EntrepeneurshipCard from "./components/EntrepeneurshipCard"

export default function EntrepeneurshipPage() {

    return(
        <div className="w-full flex flex-col items-center h-screen gap-4 pt-24">
                <h1 className="text-4xl font-bold">El mayor riesgo es no correr ningún riesgo</h1>
                <p>Elige el negocio/emprendimiento</p>
                <p className="text-[#959595]">Selecciona el negocio con el que deseas trabajar</p>

                <div className="flex flex-row gap-12 mt-12 justify-center">
                    <EntrepeneurshipCard
                        title="Auditoría"
                        description="Auditorías regulatorias, riesgos tecnológicos y asesorías de seguridad."
                    />

                    <EntrepeneurshipCard
                        title="Evaluación de vulnerabilidades"
                        description="Evaluación de vulnerabilidades a activos expuestos a internet."
                    />

                    <EntrepeneurshipCard
                        title="Phishing"
                        description="Simulaciones y cursos de concientización sobre phishing."
                    />
                </div>

        </div>
    )
}