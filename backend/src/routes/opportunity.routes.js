import express from "express";

import { createOpportunity, getOpportunities, getOpportunity, updateOpportunity } from "../controllers/opportunity.controller.js";

const router = express.Router();

router.post("/:businessId", createOpportunity);

router.get("/:businessId", getOpportunities);

router.get("/:businessId/:opportunityId", getOpportunity);

router.put("/:businessId/:opportunityId", updateOpportunity);

export default router;