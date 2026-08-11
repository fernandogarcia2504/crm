import {motion} from "framer-motion"

import ProcessCard from "../components/ProcessCard"
import BillingCard from "../components/BillingCard"

export default function FinancesPage() {


    return(
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full flex flex-col">
            <div className="w-full flex justify-start mt-12">
                <p className="font-bold">Resumen Financiero</p>
            </div>

            <div className="w-full pt-8 ">
                <ProcessCard quantity={482000} />
                <BillingCard billing="87300" />
            </div>


        </motion.div>
    )
}