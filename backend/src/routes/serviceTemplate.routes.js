import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import businessRoutes from "./routes/business.routes.js";
import companyRoutes from "./routes/company.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import opportunityRoutes from "./routes/opportunity.routes.js";
import activityRoutes from "./routes/activity.routes.js";
import serviceTemplateRoutes from "./routes/serviceTemplate.routes.js"
import projectRoutes from "./routes/project.routes.js"

import { verifyToken } from "./middlewares/auth.middleware.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

// Publica: login y registro no requieren token
app.use("/api/auth", authRoutes);

// A partir de aqui, todas las rutas requieren un JWT valido
app.use("/api/business", verifyToken, businessRoutes);
app.use("/api/companies", verifyToken, companyRoutes);
app.use("/api/contacts", verifyToken, contactRoutes);
app.use("/api/opportunities", verifyToken, opportunityRoutes);
app.use("/api/activities", verifyToken, activityRoutes);
app.use("/api/service-templates", verifyToken, serviceTemplateRoutes);
app.use("/api/projects", verifyToken, projectRoutes);

export default app;