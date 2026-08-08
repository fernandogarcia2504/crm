import { motion } from "framer-motion";
import EntrepeneurshipCard from "./components/EntrepeneurshipCard";

export default function EntrepeneurshipPage() {

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full flex flex-col items-center h-screen gap-4 pt-24"
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-4xl font-bold"
            >
                El mayor riesgo es no correr ningún riesgo
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.15 }}
            >
                Elige el negocio/emprendimiento
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.25 }}
                className="text-[#959595]"
            >
                Selecciona el negocio con el que deseas trabajar
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.35 }}
                className="flex flex-row gap-12 mt-12 justify-center"
            >
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
            </motion.div>

        </motion.div>
    )
}