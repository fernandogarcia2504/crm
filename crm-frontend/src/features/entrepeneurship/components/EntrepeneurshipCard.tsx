import React from "react";
import { useNavigate } from "react-router-dom";

import { FishingHook } from "lucide-react";

interface EntrepeneurshipCardProps {
    title: string;
    description: string;
}

export default function EntrepeneurshipCard({title, description}: EntrepeneurshipCardProps) {

    const navigate = useNavigate();

    return(
        <button onClick={() => navigate("/entrepeneurship/companies")} className="bg-[#242424] rounded-md shadow-lg w-[15%] px-3 flex flex-col items-center justify-center gap-3 py-24">
            <FishingHook />
            <p className="text-center font-bold">{title}</p>
            <p className="text-[#959595] text-center">{description}</p>
        </button>
    )
}