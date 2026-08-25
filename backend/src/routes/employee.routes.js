import express from "express";

import {
    createEmployee,
    bulkCreateEmployees,
    getEmployees,
    getEmployee,
    updateEmployee,
    regenerateCourseCredentials,
    deleteEmployee
} from "../controllers/employee.controller.js";

const router = express.Router();

router.get("/:companyId", getEmployees);

router.get("/:companyId/employees/:employeeId", getEmployee);

router.post("/:companyId", createEmployee);

router.post("/:companyId/bulk", bulkCreateEmployees);

router.put("/:companyId/employees/:employeeId", updateEmployee);

router.post("/:companyId/employees/:employeeId/regenerate-credentials", regenerateCourseCredentials);

router.delete("/:companyId/employees/:employeeId", deleteEmployee);

export default router;
