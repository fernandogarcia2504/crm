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

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/business", businessRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/service-templates", serviceTemplateRoutes);
app.use("/api/projects", projectRoutes);

export default app;

// businessId: 6a7e75318fd7397a2e006725