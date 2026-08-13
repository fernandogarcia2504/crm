import express from "express";

import { createOpportunity, getOpportunities, getOpportunity, updateOpportunity } from "../controllers/opportunity.controller";

const router = express.Router();

router.post("/business/:businessId", createOpportunity);

router.get("/business/:businessId", getOpportunities);

router.get("/business/:businessId/:opportunityId", getOpportunity);

router.put("/business/:businessId/:opportunityId", updateOpportunity);

export default router;