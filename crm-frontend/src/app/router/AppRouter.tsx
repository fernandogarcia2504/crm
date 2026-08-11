import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import LoginPage from "../../features/auth/LoginPage";

import EntrepeneurshipPage from "../../features/entrepeneurship/EntrepeneurshipPage";

import CompanyPage from "../../features/companies/pages/CompanyPage";
import Finances from "../../features/finances/pages/FinancesPage";
import ContactsPage from "../../features/contacts/pages/ContactsPage";
import TemplatesPage from "../../features/templates/pages/TemplatesPage";

import DocumentsPage from "../../features/documents/pages/DocumentsPage";
import ProjectsPage from "../../features/projects/pages/ProjectsPage";
import ProjectPage from "../../features/projects/pages/ProjectPage"
import CompanyContactsPage from "../../features/contacts/pages/CompanyContactsPage";
import CompanyActivitiesPage from "../../features/activities/pages/CompanyActivitiesPage";

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
                    <Route path="/entrepeneurship/finances" element={<Finances />} />
                    <Route path="/entrepeneurship/templates" element={<TemplatesPage />} />
                    <Route path="/entrepeneurship/contacts" element={<ContactsPage />} />

                    <Route path="/entrepeneurship/company/projects" element={<ProjectsPage />} />
                    <Route path="/entrepeneurship/company/projects/project" element={<ProjectPage />} />
                    <Route path="/entrepeneurship/company/documents" element={<DocumentsPage />} />
                    <Route path="/entrepeneurship/company/contacts" element={<CompanyContactsPage />} />
                    <Route path="/entrepeneurship/company/activities" element={<CompanyActivitiesPage />} />
                    
                </Route>
            </Route>
        </Routes>
    )
}