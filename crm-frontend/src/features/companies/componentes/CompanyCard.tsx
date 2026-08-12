import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

interface SetCompanyProps {
    name: string;
    companySize: string;
    website: string;
    status: string;
    last_update: string
}

export default function CompanyCard({name, companySize, website, status,last_update}: SetCompanyProps) {

    const navigate = useNavigate()

    return(
        <motion.div
            onClick={() => navigate("/entrepeneurship/company/contacts")}
            whileHover={{ backgroundColor: "#242424" }}
            transition={{ duration: 0.2 }}
            className="w-full grid grid-cols-[20%_10%_25%_25%_20%] mt-8 py-2 rounded-md cursor-pointer"
        >
            <motion.p whileHover={{ x: 2 }} className="">{name}</motion.p>
            <motion.p whileHover={{ x: 2 }} className="">{companySize}</motion.p>
            <motion.p whileHover={{ x: 2 }} className="">{website}</motion.p>
            <motion.p whileHover={{ x: 2 }} className="">{status}</motion.p>
            <motion.p whileHover={{ x: 2 }} className="text-right">{last_update}</motion.p>
        </motion.div>
    )
}