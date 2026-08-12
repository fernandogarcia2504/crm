import express from "express";

import { createCompany, getCompanies, getCompany, deleteCompany, updateCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.post("/:businessId/companies", createCompany);

router.get("/:businessId/companies", getCompanies);

router.get("/:businessId/companies/:companyId", getCompany);

router.update("/:businessId/companies/:companyId", updateCompany);

router.delete("/:businessId/companies/:companyId", deleteCompany);

export default router;