import express from "express";

import { createActivity, getActivity, getOpportunityActivities } from "../controllers/activity.controller";

const router = express.Router();

router.post("/business/:businessId", createActivity);

router.get("/business/:businessId", getOpportunityActivities);

router.get("/business/:businessId/:activityId", getActivity);

export default router;