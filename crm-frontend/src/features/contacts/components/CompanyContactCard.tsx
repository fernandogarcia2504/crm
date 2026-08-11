import { motion } from "framer-motion";

interface SetCompanyContactsProp {
    fullName: string;
    position: string;
    email: string;
    phone: string;
    main: string;
}

export default function CompanyContactCard({fullName, position, email, phone, main}: SetCompanyContactsProp) {

    return(
        <motion.div
            whileHover={{ backgroundColor: "#242424" }}
            transition={{ duration: 0.2 }}
            className="w-full grid grid-cols-[20%_20%_20%_30%_10%] mt-8 px-3 py-2 rounded-md"
        >
            <motion.p whileHover={{ x: 2 }} className="">{fullName}</motion.p>
            <motion.p whileHover={{ x: 2 }} className="">{position}</motion.p>
            <motion.p whileHover={{ x: 2 }} className="">{phone}</motion.p>
            <motion.p whileHover={{ x: 2 }} className="">{email}</motion.p>
            <motion.p whileHover={{ x: 2 }} className="">{main}</motion.p>
        </motion.div>
    )
}