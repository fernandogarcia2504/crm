import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import Aston from "../../assets/AstonMartin.png"

export default function() {

    const navigate = useNavigate();

    return(
        <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full h-screen flex">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-1/2 h-full">                
                <img src={Aston} alt="" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-[50%] flex flex-col items-center justify-center">
                <h1 className="text-4xl">Inicia sesión y empieza a crear...</h1>
                <div className="w-1/2 bg-[#1A1A1A] flex flex-col gap-4 mt-16 rounded-md shadow-lg p-4">

                    <div className="flex flex-col gap-1">
                        <p className="text-2xl">Iniciar Sesión</p>
                        <p className="text-sm text-[#959595]">Inicia sesion en tu cuenta</p>    
                    </div>    


                    <div className="w-full flex flex-col gap-3">
                        <p className="text-sm">Nombre de usuario</p>
                        <input type="text" className="w-full rounded-md px-3 py-1 bg-[#212121] placeholder:text-sm" placeholder="Ingresa tu nombre de usuario..." />
                    </div>

                    <div className="w-full flex flex-col gap-3">
                        <p className="text-sm">Contraseña</p>
                        <input type="text" className="w-full rounded-md px-3 py-1 bg-[#212121] placeholder:text-sm" placeholder="Ingresa tu contraseña..." />
                    </div>

                    <button onClick={() => navigate("/entrepeneurship")} className="w-full rounded-md py-1 bg-[#2F76D2] mt-12">Iniciar Sesión</button>
                </div>

            </motion.div>
        </motion.div>
    )
}