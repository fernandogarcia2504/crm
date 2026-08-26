import express from "express";

import { courseLogin } from "../../controllers/Course Controllers/courseAuth.controller.js";

const router = express.Router();

router.post("/login", courseLogin);

export default router;
