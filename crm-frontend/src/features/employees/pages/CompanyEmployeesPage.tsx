import { useState } from "react";
import { useParams } from "react-router-dom";

import { motion } from "framer-motion";
import { RefreshCw, Trash2, X, Copy } from "lucide-react";

import CreateButton from "../../../components/ui/buttons/CreateButton";
import EmployeePopup from "../components/EmployeePopup";

import { useEmployees } from "../hooks/useEmployees";

import type { CreateEmployeeData, Employee } from "../types/employee.types";

interface RevealedCredential {
    employeeId: string;
    fullName: string;
    username: string;
    password: string;
}

export default function CompanyEmployeesPage() {

    const { companyId } = useParams();

    const {
        employees,
        loading,
        error,
        createEmployee,
        bulkCreateEmployees,
        regenerateCourseCredentials,
        deleteEmployee
    } = useEmployees(companyId ?? null);

    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [revealed, setRevealed] = useState<RevealedCredential[]>([]);

    const pushRevealed = (employee: Employee) => {
        if (!employee.temporaryPassword) return;

        setRevealed((current) => [
            ...current,
            {
                employeeId: employee._id,
                fullName: employee.fullName,
                username: employee.courseAccount.username,
                password: employee.temporaryPassword as string
            }
        ]);
    };

    const handleCreateEmployee = async (employeeData: CreateEmployeeData) => {
        const employee = await createEmployee(employeeData);
        pushRevealed(employee);
        return employee;
    };

    const handleBulkCreateEmployees = async (employeesData: CreateEmployeeData[]) => {
        const result = await bulkCreateEmployees(employeesData);
        result.created.forEach(pushRevealed);
        return result;
    };

    const handleRegenerate = async (employeeId: string) => {
        const employee = await regenerateCourseCredentials(employeeId);
        pushRevealed(employee);
    };

    const handleDelete = async (employeeId: string) => {
        if (!window.confirm("¿Eliminar este empleado de la nómina de la empresa?")) return;
        await deleteEmployee(employeeId);
    };

    return (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full flex flex-col pb-16">

            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Empleado" onClick={() => setIsOpenPopup(true)} />
            </div>

            {revealed.length > 0 && (
                <div className="w-full flex flex-col gap-2 bg-[#212121] border border-[#2F76D2] rounded-md p-4 mt-6">
                    <div className="w-full flex justify-between items-center">
                        <p className="text-sm">Credenciales del curso generadas (solo se muestran una vez)</p>
                        <button onClick={() => setRevealed([])}><X size={14} /></button>
                    </div>

                    {revealed.map((credential) => (
                        <div key={credential.employeeId} className="w-full flex justify-between items-center bg-[#1A1A1A] rounded-md px-3 py-2">
                            <div>
                                <p className="text-sm">{credential.fullName}</p>
                                <p className="text-xs text-[#959595]">{credential.username}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-sm font-mono">{credential.password}</p>
                                <button
                                    type="button"
                                    onClick={() => navigator.clipboard.writeText(
                                        `${credential.username} / ${credential.password}`
                                    )}
                                    title="Copiar usuario y contraseña"
                                >
                                    <Copy size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {loading && (
                <p className="mt-8 text-[#959595]">Cargando empleados...</p>
            )}

            {error && (
                <p className="mt-8 text-red-400">{error}</p>
            )}

            {!loading && !error && employees.length === 0 && (
                <p className="mt-8 text-[#959595]">
                    No hay empleados cargados todavía. Agrega la nómina del cliente (nombre, puesto, correo y sector) para poder lanzar campañas de phishing y el curso de concientización.
                </p>
            )}

            {!loading && !error && employees.length > 0 && (
                <div className="w-full flex flex-col gap-2 mt-8">

                    <div className="w-full flex bg-[#171717] rounded-t-md px-4 py-2 text-sm text-[#959595]">
                        <p className="w-[24%]">Nombre</p>
                        <p className="w-[18%]">Puesto</p>
                        <p className="w-[24%]">Correo</p>
                        <p className="w-[14%]">Sector</p>
                        <p className="w-[10%]">Curso</p>
                        <p className="w-[10%] text-right">Acciones</p>
                    </div>

                    {employees.map((employee) => (
                        <div key={employee._id} className="w-full flex items-center bg-[#1A1A1A] rounded-md px-4 py-3">
                            <p className="w-[24%] text-sm">{employee.fullName}</p>
                            <p className="w-[18%] text-sm text-[#959595]">{employee.position || "—"}</p>
                            <p className="w-[24%] text-sm text-[#959595]">{employee.email}</p>
                            <p className="w-[14%] text-sm text-[#959595]">{employee.sector || "—"}</p>
                            <p className="w-[10%] text-sm">
                                {employee.courseAccount.completed
                                    ? "Completado"
                                    : employee.courseAccount.enrolled
                                        ? `${employee.courseAccount.progress}%`
                                        : "Sin enrolar"}
                            </p>
                            <div className="w-[10%] flex justify-end gap-3">
                                <button title="Regenerar credenciales del curso" onClick={() => handleRegenerate(employee._id)}>
                                    <RefreshCw size={14} />
                                </button>
                                <button title="Eliminar" onClick={() => handleDelete(employee._id)}>
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {isOpenPopup && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={() => setIsOpenPopup(false)}
                >
                    <EmployeePopup
                        onClose={() => setIsOpenPopup(false)}
                        createEmployee={handleCreateEmployee}
                        bulkCreateEmployees={handleBulkCreateEmployees}
                    />
                </div>
            )}

        </motion.div>
    )
}
