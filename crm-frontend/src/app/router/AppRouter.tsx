import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import LoginPage from "../../features/auth/LoginPage";
import EntrepeneurshipPage from "../../features/entrepeneurship/EntrepeneurshipPage";
import CompanyPage from "../../features/companies/pages/CompanyPage";
import ProjectPage from "../../features/projects/pages/ProjectPage";

export default function AppRouter() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/" element={<LoginPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route element={<MainLayout />}>
                    <Route path="/entrepeneurship" element={<EntrepeneurshipPage />} />
                    <Route path="/entrepeneurship/companies" element={<CompanyPage />} />

                    <Route path="/entrepeneurship/company/project" element={<ProjectPage />} />
                    
                </Route>
            </Route>
        </Routes>
    )
}