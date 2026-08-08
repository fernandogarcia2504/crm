import {motion} from "framer-motion"

import { File } from "lucide-react";
import { Trash } from "lucide-react";

interface SetDocumentsProps {
    category: string;
    name: string;
    size: string;
    notes: string;
}

export default function Document({category, name, size, notes}: SetDocumentsProps) {

    return(
        <motion.div 
            whileHover={{ backgroundColor: "#242424" }}
            transition={{ duration: 0.2 }}
            className="w-full grid grid-cols-[20%_10%_20%_40%_10%] mt-8 py-2">
            <div className="flex items-center gap-2">
                <File color="blue" />
                <p>{name}</p>
            </div>
            <p>{size}</p>
            <p>{category}</p>
            <p>{notes}</p>
            
            <button className="text-right"><Trash color="red" /></button>
        </motion.div>
    )
}
