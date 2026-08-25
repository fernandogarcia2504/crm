import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

import { BusinessContext } from "../../../app/context/BusinessContext";

import CreateButton from "../../../components/ui/buttons/CreateButton";
import CampaignCard from "../components/CampaignCard";
import CampaignPopup from "../components/CampaignPopup";

import { useCampaigns } from "../hooks/useCampaigns";
import { getEmployees } from "../../employees/services/employeeService";

import type { Employee } from "../../employees/types/employee.types";

export default function ProjectCampaignsPage() {

    const navigate = useNavigate();
    const { companyId, projectId } = useParams();

    const businessContext = useContext(BusinessContext);

    const { campaigns, loading, error, createCampaign } = useCampaigns(projectId ?? null);

    const [employees, setEmployees] = useState<Employee[]>([]);
    const [employeesLoading, setEmployeesLoading] = useState(false);
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    // Las campañas de phishing solo existen para el negocio de
    // concientización en seguridad; si alguien llega aquí por URL directa
    // desde otro negocio, lo regresamos al proyecto.
    useEffect(() => {

        if (businessContext && !businessContext.businessLoading && !businessContext.isSecurityAwarenessBusiness) {
            navigate(`/entrepeneurship/${companyId}/projects/${projectId}`);
        }

    }, [businessContext, companyId, projectId, navigate]);

    useEffect(() => {

        if (!companyId || !isOpenPopup) return;

        const fetchEmployees = async () => {
            try {
                setEmployeesLoading(true);
                const data = await getEmployees(companyId);
                setEmployees(data);
            } catch (error) {
                console.error(error);
            } finally {
                setEmployeesLoading(false);
            }
        };

        fetchEmployees();

    }, [companyId, isOpenPopup]);

    return (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full flex flex-col mb-16">

            <button onClick={() => navigate(`/entrepeneurship/${companyId}/projects/${projectId}`)} className="w-full flex flex-row items-center mt-12">
                <ChevronLeft />
                <p>Regresar al proyecto</p>
            </button>

            <div className="w-full flex justify-between items-center mt-8">
                <p>Campañas de phishing</p>
                <CreateButton title="Lanzar Campaña" onClick={() => setIsOpenPopup(true)} />
            </div>

            {loading && (
                <p className="mt-8 text-[#959595]">Cargando campañas...</p>
            )}

            {error && (
                <p className="mt-8 text-red-400">{error}</p>
            )}

            {!loading && !error && campaigns.length === 0 && (
                <p className="mt-8 text-[#959595]">
                    Todavía no hay campañas lanzadas para este proyecto. Asegúrate de tener empleados cargados en la empresa antes de crear una.
                </p>
            )}

            <div className="w-full grid grid-cols-3 gap-12 mt-8">
                {!loading && !error && campaigns.map((campaign) => (
                    <CampaignCard key={campaign._id} campaign={campaign} />
                ))}
            </div>

            {isOpenPopup && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={() => setIsOpenPopup(false)}
                >
                    <CampaignPopup
                        onClose={() => setIsOpenPopup(false)}
                        employees={employees}
                        employeesLoading={employeesLoading}
                        createCampaign={createCampaign}
                    />
                </div>
            )}

        </motion.div>
    )
}
