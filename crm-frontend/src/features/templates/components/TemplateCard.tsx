import { useNavigate } from "react-router-dom";

import {motion} from "framer-motion"

import { File } from "lucide-react";

interface SetTemplatesProps {
    name: string;
    notes: string;
    status: string;
}

export default function TemplatesCard({name, notes, status}: SetTemplatesProps) {

    return(
        <motion.div 
            className="bg-[#1A1A1A] w-full rounded-md shadow-lg px-4 py-4 flex flex-col gap-4 cursor-pointer"
            whileHover={{ y: -6, scale: 1.02}}
            whileTap={{ scale: 0.98}}
            transition={{ type: "spring", stiffness: 300, damping: 20}}>

            <div className="bg-[#959595] rounded-lg flex items-center justify-center h-24">
                <File size={32} color="red" />
            </div>
            <p>{name}</p>
            <p className="text-sm text-[#959595]">{notes}</p>

            <div className="w-1/4 rounded-lg bg-[#171717] py-1 flex items-center justify-center">
                <p className="text-sm">{status}</p>
            </div>
        </motion.div>
    )
}