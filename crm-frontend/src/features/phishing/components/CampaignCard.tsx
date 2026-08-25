import { useNavigate, useParams } from "react-router-dom";

import { motion } from "framer-motion";
import { Fish, Calendar } from "lucide-react";

import type { PhishingCampaign } from "../types/phishingCampaign.types";

interface CampaignCardProps {
    campaign: PhishingCampaign;
}

export default function CampaignCard({ campaign }: CampaignCardProps) {

    const navigate = useNavigate();
    const { companyId, projectId } = useParams();

    const formattedDate = campaign.launchDate
        ? new Date(campaign.launchDate).toLocaleDateString("es-MX", {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
        : "Sin fecha";

    return (
        <motion.button
            onClick={() => navigate(`/entrepeneurship/${companyId}/projects/${projectId}/campaigns/${campaign._id}`)}
            className="bg-[#1A1A1A] rounded-md shadow-lg px-4 py-4 cursor-pointer text-left"
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="flex justify-between items-center">
                <p>{campaign.name}</p>
                <Fish size={16} />
            </div>

            <div className="border-b border-b-[#777777] mt-2"></div>

            <div className="flex justify-between pt-2">
                <p className="text-sm text-[#959595]">{campaign.status}</p>
                <p className="text-sm text-[#959595]">{campaign.metrics.totalTargets} objetivos</p>
            </div>

            <div className="flex justify-between pt-2">
                <p className="text-sm text-[#959595]">Clics</p>
                <p className="text-sm">{campaign.metrics.clickRate}%</p>
            </div>

            <div className="rounded-2xl w-full bg-slate-300 h-1 mt-1">
                <div className="rounded-2xl h-full bg-red-500" style={{ width: `${campaign.metrics.clickRate}%` }} />
            </div>

            <div className="flex justify-between pt-2">
                <p className="text-sm text-[#959595]">Reportado</p>
                <p className="text-sm">{campaign.metrics.reportRate}%</p>
            </div>

            <div className="rounded-2xl w-full bg-slate-300 h-1 mt-1">
                <div className="rounded-2xl h-full bg-[#2F76D2]" style={{ width: `${campaign.metrics.reportRate}%` }} />
            </div>

            <div className="flex gap-1 items-center mt-3">
                <Calendar size={15} />
                <p className="text-sm text-[#959595]">{formattedDate}</p>
            </div>
        </motion.button>
    )
}
