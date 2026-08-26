import express from "express";

import {
    getMe,
    getMyCourse,
    completeModule,
    submitQuiz
} from "../../controllers/Course Controllers/coursePortal.controller.js";

const router = express.Router();

router.get("/me", getMe);

router.get("/course", getMyCourse);

router.post("/modules/:moduleId/complete", completeModule);

router.post("/modules/:moduleId/quiz", submitQuiz);

export default router;
