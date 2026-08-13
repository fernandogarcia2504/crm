import express from "express";

import { createServiceTemplate, getServiceTemplate, getServiceTemplates } from "../controllers/serviceTemplate.controller";

const router = express.Router();

router.post("/business/:businessId", createServiceTemplate);

router.get("/business/businessId", getServiceTemplates)

router.get("/business/businessId/:serviceTemplateId", getServiceTemplates)

export default router;